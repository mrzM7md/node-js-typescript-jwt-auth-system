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

@Entity("carts")
export class Cart {
    @PrimaryGeneratedColumn({ type: "mediumint", unsigned: true })
    id!: number;

    @Column({ type: "mediumint", unsigned: true })
    slUser!: number;

    @Column({ type: "varchar", length: 80, nullable: true })
    slSession!: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    slDate!: Date;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column({ type: "varchar", length: 45, nullable: true })
    tfstrdef!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "slUser" })
    user!: User;
}
