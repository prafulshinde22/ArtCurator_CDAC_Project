import { HttpHeaders } from "@angular/common/http"

const getHeaders = () => {
  return new HttpHeaders({
    'Authorization' : "Bearer " + localStorage.getItem("jwt")
  }
}
