export function resizeIds(data: object[]) {
  data.map((value: any, index: number) => {
    data[index] = {...value, id: index}
  });

  return data;
}
