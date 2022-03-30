import { Article, Device } from 'MyModels';
import axios from 'axios';

import * as localStorage from './local-storage-service';

let articles: Article[] = localStorage.get<Article[]>('articles') || [];

export function loadDevices(): Promise<Device[]> {
    return new Promise(async (resolve, reject) => {

        console.log('--> loadDevices');
        axios.get('http://127.0.0.1:8080/api/device',
            {
                headers: {
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMjM0IiwiZW1haWwiOiJha29zLnNlcmVnQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6Ijc2MTIzNTQ1NjEyMzQ3ODEyNTYzNDcxMjM1NjQiLCJyb2xlIjoidXNlciIsIm5iZiI6MTY0ODU4MTk2MywiZXhwIjoxNjgwMTE3OTYzLCJpYXQiOjE2NDg1ODE5NjMsImlzcyI6Imh0dHA6Ly9teXNpdGUuY29tIiwiYXVkIjoiaHR0cDovL215YXVkaWVuY2UuY29tIn0.5hsN3ueGkbM32Ct2raCBpKshblgQGluKz1LerStBcho'
                }
            }).then(function (response) {
                response.data.devices.forEach((device:Device) => {
                    device.lastSeen = response.data.deviceIdLastSeen[device.deviceID]
                });
                resolve(response.data.devices);
            }).catch(function (error) {
                reject("Unable to fetch devices");
            });
    });
}

/* ====================================================================== */
export function loadArticles(): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    resolve(articles);
  });
}

export function createArticle(article: Article): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    articles = articles.concat(article);
    resolve(articles);
  });
}

export function updateArticle(article: Article): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    articles = articles.map(i => (i.id === article.id ? article : i));
    resolve(articles);
  });
}

export function deleteArticle(article: Article): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    articles = articles.filter(i => i.id !== article.id);
    resolve(articles);
  });
}
