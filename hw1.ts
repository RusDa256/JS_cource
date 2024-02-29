type dog = {
  name: string
  kind: string
  yearOfBirth: number
}


type FilterKeysOfType<Type, Key> = {
  [key in keyof Type as Type[key] extends Key ? key : never]: Type[key];
};

type dogNameKind = FilterKeysOfType<dog, string>;

let a: dogNameKind;
a = {
  name: 'name',
  kind: 'kind'
}