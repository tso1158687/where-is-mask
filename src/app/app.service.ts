import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private http: HttpClient
  ) { }
  getPosition(): Promise<any> {
    console.log('get position')
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resp => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        err => {
          reject(err);
        }
      );
    });
  }
  getMaskInformation(center, ne, sw, max: number) {
    const data = {
      center: {
        lat: center.lat,
        lng: center.lng
      },
      bounds: {
        ne: {
          lat: ne.lat,
          lng: ne.lng
        },
        se: {
          lat: sw.lat,
          lng: ne.lng
        },
        sw: {
          lat: sw.lat,
          lng: sw.lng
        },
        nw: {
          lat: ne.lat,
          lng: sw.lng
        }

      },
      max
    };
    return this.http.post('https://endpoint-dot-mask-9999.appspot.com/stores', data)
  }
}
