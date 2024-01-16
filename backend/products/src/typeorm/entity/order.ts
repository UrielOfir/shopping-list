import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './categories';
import { Product } from './product';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  orderId: string;

  @Column()
  CustomerName: string;

  @Column()
  Email: string;


  @Column()
  Address: string;

  @Column()
  OrderItemsJson: string;
}
