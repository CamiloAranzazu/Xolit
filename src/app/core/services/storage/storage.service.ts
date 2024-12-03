import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Guardar un arreglo en localStorage
  setArray(key: string, value: any[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Obtener un arreglo desde localStorage
  getArray(key: string): any[] {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  }

  // Eliminar un arreglo de localStorage
  removeArray(key: string): void {
    localStorage.removeItem(key);
  }

  // Limpiar todo el localStorage
  clear(): void {
    localStorage.clear();
  }
}
