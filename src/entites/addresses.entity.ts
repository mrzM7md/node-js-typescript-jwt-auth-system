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

@Entity("addresses")
export class Address {
    @PrimaryGeneratedColumn({ type: "mediumint", unsigned: true })
    id!: number;

    @Column({ type: "mediumint", unsigned: true })
    userId!: number;

    @Column({ type: "varchar", length: 80, nullable: true })
    msName!: string;

    @Column({ type: "varchar", length: 80, nullable: true })
    msMobile!: string;

    @Column({ type: "varchar", length: 80, nullable: true })
    msMohaf!: string;

    @Column({ type: "varchar", length: 80, nullable: true })
    msModer!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    msAdresA!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    msAdresB!: string;

    @Column({ type: "mediumint", nullable: true })
    createduser!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column({ type: "varchar", length: 45, nullable: true })
    tfstrdef!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "userId" })
    user!: User;
}
