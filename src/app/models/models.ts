import {Expose, Type} from "class-transformer";
import 'reflect-metadata';

export class DataElement {
  @Expose()
  id!: string;
  @Expose()
  int!: number;
  @Expose()
  float!: number;
  @Expose()
  color!: string;

  @Expose()
  @Type(() => Child)
  child!: Child;
}

class Child {
  @Expose()
  id!: string;

  @Expose()
  color!: string;
}
