import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './categories';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  productId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  // Other product fields...

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
