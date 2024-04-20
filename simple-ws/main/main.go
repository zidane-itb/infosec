package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			http.Error(w, "Arbitrary return to trap", http.StatusMethodNotAllowed)
			return
		}

		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		err := r.ParseForm()
		if err != nil {
			return
		}

		param := r.Form.Get("param")
		if param == "" {
			return
		}
		log.Println("received parameter:", param)

	})

	fmt.Println("Server listening on port 80...")
	http.ListenAndServe(":80", nil)
}
