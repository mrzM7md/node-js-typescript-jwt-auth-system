import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Cart } from "./carts.entyty";

@Entity("cartItems")
export class CartItem {
    @PrimaryGeneratedColumn({ type: "mediumint", unsigned: true })
    id!: number;

    @Column({ type: "mediumint", unsigned: true })
    sldSlId!: number;

    @Column({ type: "tinyint", unsigned: true, default: 0 })
    sldItemTp!: number;

    @Column({ type: "mediumint", unsigned: true })
    sldItemId!: number;

    @Column({ type: "varchar", length: 150, nullable: true })
    sldItemDescr!: string;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    sldPrice!: number;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    sldQuantity!: number;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    sldAmount!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column({ type: "varchar", length: 45, nullable: true })
    tfstrdef!: string;

    @ManyToOne(() => Cart)
    @JoinColumn({ name: "sldSlId" })
    cart!: Cart;
}
