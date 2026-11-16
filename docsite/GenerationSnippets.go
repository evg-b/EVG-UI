package main

import (
    "log"
    "os"
    "os/exec"
    "path/filepath"
)

func main() {
    directory, err := os.Getwd()
    if err != nil {
        log.Fatal(err)
    }
    for {
        if _, err := os.Stat(filepath.Join(directory, "scripts", "GenerationSnippets.mts")); err == nil {
            break
        }
        parent := filepath.Dir(directory)
        if parent == directory {
            log.Fatal("Run the generator from the EVG-UI repository")
        }
        directory = parent
    }

    // Общий TypeScript-генератор создаёт snippets.ts и Examples.tsx.
    command := exec.Command("yarn", "propdoc:snippet")
    command.Dir = directory
    command.Stdout = os.Stdout
    command.Stderr = os.Stderr
    if err := command.Run(); err != nil {
        log.Fatal(err)
    }
}
