/**
 * ListInterface
 */
export interface ListInterface {
  id: number;
  name: string;
  avatar: string;
  createdAt: string;
}

/**
 * ListStateInterface
 */
export interface ListStateInterface {
  lists: ListInterface[];
}

/**
 * ListItemInterface
 */
export interface ListItemInterface {
  item: ListInterface;
}
