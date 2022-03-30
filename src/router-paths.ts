const pathsMap = {
  home: () => '/',
  addArticle: () => '/add-article',
  viewArticle: (articleId: string) => `/device/${articleId}`,
};
type PathsMap = typeof pathsMap;

export const getPath = <TRoute extends keyof PathsMap>(
  route: TRoute,
  ...params: Parameters<PathsMap[TRoute]>
) => {
  const pathCb: (...args: any[]) => string = pathsMap[route];

  return pathCb(...params);
};
