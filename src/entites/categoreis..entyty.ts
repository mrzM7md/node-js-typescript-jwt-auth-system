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

@Entity("categoreis")
export class Category {
    @PrimaryGeneratedColumn({ type: "mediumint", unsigned: true })
    id!: number;

    @Column({ type: "varchar", length: 80, nullable: true })
    ctAName!: string;

    @Column({ type: "varchar", length: 80, nullable: true })
    ctEName!: string;

    @Column({ type: "smallint", unsigned: true, nullable: true })
    ctHasChild!: number;

    @Column({ type: "varchar", length: 30, nullable: true })
    ctParent!: string;

    @Column({ type: "varchar", length: 30, nullable: true })
    ctTp!: string;

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
