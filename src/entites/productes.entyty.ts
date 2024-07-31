import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { User } from "./user.entity";

@Entity("productes")
export class Product {
    @PrimaryGeneratedColumn({ type: "mediumint", unsigned: true })
    id!: number;

    @Column({ type: "varchar", length: 80, nullable: true })
    prAName!: string;

    @Column({ type: "varchar", length: 80, nullable: true })
    prEName!: string;

    @Column({ type: "smallint", unsigned: true, nullable: true })
    prUnitId!: number;

    @Column({ type: "varchar", length: 30, nullable: true })
    prUnitA!: string;

    @Column({ type: "varchar", length: 30, nullable: true })
    prUnitE!: string;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    prPrice!: number;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    prOffer!: number;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    prPriceTax!: number;

    @Column({ type: "tinyint", unsigned: true, default: 0 })
    prUseStatus!: number;

    @Column({ type: "varchar", length: 200, nullable: true })
    prDescription!: string;

    @Column({ type: "varchar", length: 200, nullable: true })
    prSubDescription!: string;

    @Column({ type: "smallint", unsigned: true, nullable: true })
    prCategoryId!: number;

    @Column({ type: "smallint", unsigned: true, nullable: true })
    prSubcategoryId!: number;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    prQuantity!: number;

    @Column({ type: "varchar", length: 80, nullable: true })
    prImage!: string;

    @Column({ type: "mediumint", unsigned: true })
    prTrader!: number;

    @Column({ type: "decimal", precision: 7, scale: 2, default: 0 })
    prDelivValue!: number;

    @Column({ type: "mediumint", nullable: true })
    createduser!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column({ type: "varchar", length: 45, nullable: true })
    tfstrdef!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "createduser" })
    user!: User;
}
