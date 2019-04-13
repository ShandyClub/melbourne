package main

import (
	"log"
	"net/http"

	"fresh-as/api/readPubsByCity"
)

func main() {
	http.HandleFunc("/read-pubs-by-city", readPubsByCity.Handler)

	log.Fatal(http.ListenAndServe(":5000", nil))
}
