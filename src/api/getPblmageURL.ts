import { Item } from '../@types/type';

export function getPbImageURL(item: Item, fileName = 'photo'): string {
  return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item[fileName]}`;
}
