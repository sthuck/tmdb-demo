export const replacePathParams = (
  originalPath: string,
  params: Record<string, string | number>
) => {
  const pathParam = Array.from(originalPath.matchAll(/:[^/]+/g));

  let newParams = { ...params };
  let newPath = originalPath;

  pathParam.forEach((regExMatch) => {
    const param = regExMatch[0];
    const paramName = param.slice(1);
    const paramValue = newParams[paramName];

    if (paramValue === undefined) {
      throw new Error(`Missing path param "${paramName}"`);
    }

    newPath = newPath.replace(param, paramValue.toString());

    const { [paramName]: p, ...rest } = newParams;
    newParams = rest;
  });

  return { path: newPath, params: newParams };
};
