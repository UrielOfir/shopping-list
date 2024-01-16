import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './categories';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  productId: string;

  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
