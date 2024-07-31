import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Order } from "./orders.entyty";

@Entity("orderItems")
export class OrderItem {
    @PrimaryGeneratedColumn({ type: "mediumint", unsigned: true })
    id!: number;

    @Column({ type: "mediumint", unsigned: true })
    odtOrdId!: number;

    @Column({ type: "mediumint", unsigned: true })
    odtItmStore!: number;

    @Column({ type: "smallint", unsigned: true, default: 0 })
    odtItmOrd!: number;

    @Column({ type: "tinyint", unsigned: true, default: 0 })
    odtItmTp!: number;

    @Column({ type: "mediumint", unsigned: true })
    odtItmId!: number;

    @Column({ type: "varchar", length: 30, nullable: true })
    odtItmNo!: string;

    @Column({ type: "varchar", length: 150, nullable: true })
    odtItmDescr!: string;

    @Column({ type: "decimal", precision: 7, scale: 2, default: 0 })
    odtQuantity!: number;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    odtPrice!: number;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    odtTax!: number;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    odtAmount!: number;

    @Column({ type: "varchar", length: 45, nullable: true })
    tfstrdef!: string;

    @ManyToOne(() => Order)
    @JoinColumn({ name: "odtOrdId" })
    order!: Order;
}
