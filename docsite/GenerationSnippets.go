package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"strings"
	"text/template"
)

func main() {
	// 1)[upgrade] составить дерево файлов для сниппетов
	// 1) заходим в папку и снимаем снипеты с файлов
	findDir()
	// 2) создать снипеты
	// 3) записать в файл snippets.js
}

func findDir()  {
	path := "./Example/Components/"
	dirs, err := ioutil.ReadDir(path)
	if err != nil {
		log.Fatal(err)
	}

	for _, dir := range dirs {
		pathLocal := path+dir.Name()+"/"
		if dir.IsDir() {
			files, err := ioutil.ReadDir(pathLocal)
			if err != nil {
				log.Fatal(err)
			}
			var preSnippet string
			var examples []string
			for _, file := range files {
				if ignoredFiles(file.Name()) {
					fmt.Printf("[%s] -> [%s] \n",dir.Name(),file.Name())
					nameFaleNotFormat := strings.Replace(file.Name(), ".js", "", -1)
					preSnippet += fmt.Sprintf("'%s' : `%s`,", nameFaleNotFormat, GetContentFile(pathLocal+file.Name()))
					examples = append(examples,nameFaleNotFormat)
				}
			}
			TemplateSnippetsFile := CreateTemplateSnippetsFile(preSnippet)
			CreateJS(pathLocal+"snippets.js",TemplateSnippetsFile)
			fmt.Printf("[%s] -> snippets.js [ok]\n",dir.Name())

			TemplateExamplesFile := CreateTemplateExamplesFile(CreateImportsContentExports(dir.Name(),examples))
			CreateJS(pathLocal+"Examples.js",TemplateExamplesFile)
			fmt.Printf("[%s] -> Examples.js [ok]\n",dir.Name())
		}
	}
}
func CreateImportsContentExports(dirName string,examples []string) (string,string,string) {
	var imports,contents,exports string

	for _,nameImport := range examples {
		imports += fmt.Sprintf("import %s from './%s'\n",nameImport,nameImport)
	}

	for _,nameContent := range examples {
		nameComponentExample := fmt.Sprintf("%sExample",nameContent)
		exports += nameComponentExample+",\n"
		contents += fmt.Sprintf(`
const %s = () => {
	return (
		<CodeExample
			title='%s'
			demo={<%s />}
			snippet={Snippets.%s}
		/>
	)
}
`,nameComponentExample,strings.Replace(nameContent,dirName,"",-1),nameContent,nameContent)
	}

	return imports,contents,exports
}
func CreateTemplateExamplesFile(imports,contents,exports string) string {
	miT := template.New("Examples")
	TemplSnippetsfile := `import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
{{.Imports}}
{{.Contents}}
export { 
	{{.Exports}}
}
`
	miT.Parse(TemplSnippetsfile)
	var tpl bytes.Buffer
	miT.Execute(&tpl, struct{Imports string;Contents string;Exports string}{imports,contents,exports})
	return tpl.String()
}
func CreateTemplateSnippetsFile(content string) string {
	return fmt.Sprintf("export default {\n%s\n}",content)
}
func CreateJS(path,content string) {
	file, err := os.Create(path)
	if err != nil{
		fmt.Println("Unable to create file:", path,err)
		os.Exit(1)
	}
	defer file.Close()
	file.WriteString(content)
}
func GetContentFile(path string) string {
	fContent, err := ioutil.ReadFile(path)
	if err != nil {
		panic(err)
	}
	return shieldingJS(string(fContent))
}
func ignoredFiles(fileName string) bool {
	// false - игнорировать | true - одобряем
	ignoredNames := []string{"Example","Examples","snippets","custom_"}
	for _,name := range ignoredNames {
		if strings.Contains(fileName, name) {
			return false
		}
	}
	return true
}
func shieldingJS(text string) string {
	// backticks
	// $
	return strings.Replace(strings.Replace(text, "`", "\\`", -1),"$","\\$",-1)
}