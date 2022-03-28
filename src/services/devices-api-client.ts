import { Article, Device } from 'MyModels';
import axios from 'axios';

import * as localStorage from './local-storage-service';

let articles: Article[] = localStorage.get<Article[]>('articles') || [];

export function loadDevices(): Promise<Device[]> {
    return new Promise(async (resolve, reject) => {

        axios.get('http://127.0.0.1:8080/api/device',
            {
                headers: {
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMjQwIiwiZW1haWwiOiJkZW1vdXNlckBkZW1vLmRlIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNTkwZGRlNTktNGI4My00M2NiLThlY2UtMWM3MWQ1ZGNiN2M3Iiwicm9sZSI6ImRlbW8iLCJuYmYiOjE2NDc1NDQ3ODgsImV4cCI6MTY3OTA4MDc4OCwiaWF0IjoxNjQ3NTQ0Nzg4LCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teWF1ZGllbmNlLmNvbSJ9.bvomBIkfN3Aymum6MxQY6jdujHrCff1pn3to9jOGqo8'
                }
            }).then(function (response) {
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
