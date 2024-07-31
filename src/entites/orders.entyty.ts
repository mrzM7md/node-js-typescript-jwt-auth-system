import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Address } from "./addresses.entity";
import { User } from "./user.entity";

@Entity("orders")
export class Order {
    @PrimaryGeneratedColumn({ type: "mediumint", unsigned: true })
    id!: number;

    @Column({ type: "mediumint", unsigned: true })
    ordUser!: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    ordDate!: Date;

    @Column({ type: "decimal", precision: 13, scale: 2, default: 0 })
    ordTotal!: number;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    ordDelivVal!: number;

    @Column({ type: "decimal", precision: 9, scale: 2, default: 0 })
    ordTax!: number;

    @Column({ type: "decimal", precision: 13, scale: 2, default: 0 })
    ordNet!: number;

    @Column({ type: "mediumint", unsigned: true })
    ordMsAddressId!: number;

    @Column({ type: "varchar", length: 80, nullable: true })
    ordMsName!: string;

    @Column({ type: "varchar", length: 20, nullable: true })
    ordMsTel!: string;

    @Column({ type: "varchar", length: 40, nullable: true })
    ordMsMohaf!: string;

    @Column({ type: "varchar", length: 40, nullable: true })
    ordMsModer!: string;

    @Column({ type: "varchar", length: 150, nullable: true })
    ordMsAddressA!: string;

    @Column({ type: "varchar", length: 150, nullable: true })
    ordMsAddressB!: string;

    @Column({ type: "tinyint", unsigned: true, default: 0 })
    ordPayWay!: number;

    @Column({ type: "varchar", length: 30, nullable: true })
    ordSanadNo!: string;

    @Column({ type: "varchar", length: 50, nullable: true })
    ordSanadOwn!: string;

    @Column({ type: "timestamp", nullable: true })
    ordSanadDate!: Date;

    @Column({ type: "mediumint", unsigned: true })
    ordSanadChkUserId!: number;

    @Column({ type: "varchar", length: 50, nullable: true })
    ordSanadChkUserName!: string;

    @Column({ type: "mediumint", unsigned: true })
    ordSanaRef!: number;

    @Column({ type: "tinyint", unsigned: true, default: 0 })
    ordStatus!: number;

    @Column({ type: "tinyint", unsigned: true, default: 0 })
    ordCanceled!: number;

    @Column({ type: "mediumint", unsigned: true })
    ordCancelUser!: number;

    @Column({ type: "varchar", length: 80, nullable: true })
    ordCancelReson!: string;

    @UpdateDateColumn()
    ordUpdated_at!: Date;

    @Column({ type: "mediumint", nullable: true })
    createduser!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column({ type: "varchar", length: 45, nullable: true })
    tfstrdef!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "ordUser" })
    user!: User;

    @ManyToOne(() => Address)
    @JoinColumn({ name: "ordMsAddressId" })
    address!: Address;
}
