import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from './product';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  categoryId: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
