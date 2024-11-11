import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Annotation } from '../models/annotation';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private url: string =
    'https://crudcrud.com/api/4956fbb4d2034a8ab357d9dd7698080d';

  private path: string = '/annotations';

  create(annotation: FormGroup) {
    const payload = annotation.getRawValue();
    return this.http.post(this.url + this.path, payload);
  }

  getAll() {
    return this.http.get<Annotation[]>(this.url + this.path);
  }

  delete(annotationId: string) {
    return this.http.delete<Annotation[]>(
      `${this.url}${this.path}/${annotationId}`
    );
  }

  // Novo método de atualização
  update(annotationId: string, updatedAnnotation: Annotation) {
    return this.http.put<Annotation>(
      `${this.url}${this.path}/${annotationId}`,
      updatedAnnotation
    );
  }
}
