import { Article, Device } from 'MyModels';

import * as localStorage from './local-storage-service';

let articles: Article[] = localStorage.get<Article[]>('articles') || [];

export function loadDevices(): Promise<Device[]> {
    console.log('--> loadDevices called');
    return new Promise((resolve, reject) => {
        console.log('--> creating dummy device');
        let devices: Device[] = [];
        devices.push({ deviceID: '1233', name: 'asdf', platform: 'esp32', userID: 1234 });
        resolve(devices);
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
