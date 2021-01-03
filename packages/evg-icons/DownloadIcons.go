package main

import (
	"bytes"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"regexp"
	"strings"
	"sync"
	"text/template"
)
type materialIconsArr struct {
	Icons []materialIcon `json:"icons"`
}
type materialIcon struct {
	Name string `json:"name"`
	Version int `json:"version"`
}
func (mi *materialIcon) urlIcon() string {
	return fmt.Sprintf("https://fonts.gstatic.com/s/i/materialicons/%s/v%d/24px.svg", mi.Name, mi.Version)
}
func (mi *materialIcon) nameCorrect() string {
	newName := strings.Replace(strings.Title(strings.ToLower(strings.Replace(mi.Name, "_", " ", -1)))," ","",-1)
	isFirstItInt := regexp.MustCompile(`[0-9]`)
	if isFirstItInt.MatchString(newName[0:1])  {
		newName = "Icon"+newName
	}
	return newName
}
type htmlSVG struct {
	Content string `xml:",innerxml"`
}
func main() {
	getIconsJSON()
}

func getIconsJSON() {
	targetUrl := "https://fonts.google.com/metadata/icons"
	client := new(http.Client)
	resp, err := client.Get(targetUrl)
	if err != nil {
		fmt.Println(err)
		//return err
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	bodyString := string(body)

	var materialIcons materialIconsArr
	jsonFixIcons := strings.Replace(bodyString, ")]}'", "", -1)

	errParJson := json.Unmarshal([]byte(jsonFixIcons), &materialIcons)
	if errParJson != nil {
		fmt.Println("errParJson:",errParJson)
	}
	wg := new(sync.WaitGroup)
	wg.Add(len(materialIcons.Icons))
	for _, icon := range materialIcons.Icons {
		go getIconRequest(client,icon,wg)
	}
	wg.Wait()
	fmt.Println("DONE ALL:",len(materialIcons.Icons))
	// create index.js
	CreateIndexJS(materialIcons)
}
func getIconRequest(client *http.Client,mi materialIcon,wg *sync.WaitGroup) {
	fmt.Println("urlIcon:", mi.urlIcon())
	resp, err := client.Get(mi.urlIcon())
	fmt.Println("HTTP CODE:",resp.StatusCode,mi.urlIcon(),err)
	if err != nil {
		fmt.Println(err)
		//return err
	}
	body, err := ioutil.ReadAll(resp.Body)
	bodyString := string(body)
	CreateSVGIconFile(mi.nameCorrect(),bodyString,wg)
}

func CreateSVGIconFile(name,svg string,wg *sync.WaitGroup)  {
	parseSVGresult := ParseSVG(svg)
	templateSVGFileresult := CreateTemplateSVGFile(name,parseSVGresult)

	CreateFile(fmt.Sprintf("./src/material/%s.js", name),templateSVGFileresult)
	fmt.Println("Done CreateFile.",name)
	defer wg.Done()
}
func ParseSVG(body string) string {
	hSVG := htmlSVG{}
	err := xml.Unmarshal([]byte(body), &hSVG)
	if err != nil {
		fmt.Println("error", err)
		//return
	}
	return hSVG.Content
}
func CreateTemplateSVGFile(name ,svg string) string {
	miT := template.New("Material Icon")
	TemplSVGfile := `import React from 'react';
import CreateSvgIcon from '../CreateSvgIcon'

export default CreateSvgIcon({
    path: <React.Fragment>{{.Svg}}</React.Fragment>,
    name: '{{.Name}}',
})`
	miT.Parse(TemplSVGfile)
	var tpl bytes.Buffer
	miT.Execute(&tpl, struct{Name string;Svg string}{name,svg})
	return tpl.String()
}
func CreateIndexJS(mIcons materialIconsArr) {
	var indexStringRes string
	for _, icon := range mIcons.Icons {
		name := icon.nameCorrect()
		indexStringRes += fmt.Sprintf("export { default as %s } from './material/%s';\n", name,name)
	}
	CreateFile(fmt.Sprintf("./src/%s.js", "index"),indexStringRes)
	fmt.Println("Create index.js")
}

func CreateFile(name,content string) {
	file, err := os.Create(name)
	if err != nil{
		fmt.Println("Unable to create file:", name,err)
		os.Exit(1)
	}
	defer file.Close()
	file.WriteString(content)
}