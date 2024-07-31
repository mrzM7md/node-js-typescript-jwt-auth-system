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
import { Address } from "./addresses.entity";

@Entity("stories")
export class Story {
    @PrimaryGeneratedColumn({ type: "mediumint", unsigned: true })
    id!: number;

    @Column({ type: "varchar", length: 80, nullable: true })
    strLogo!: string;

    @Column({ type: "varchar", length: 80, nullable: true })
    strAName!: string;

    @Column({ type: "varchar", length: 80, nullable: true })
    strEName!: string;

    @Column({ type: "smallint", unsigned: true, nullable: true })
    strCityId!: number;

    @Column({ type: "varchar", length: 80, nullable: true })
    strCity!: string;

    @Column({ type: "smallint", unsigned: true, nullable: true })
    strSouqId!: number;

    @Column({ type: "varchar", length: 100, nullable: true })
    strSouq!: string;

    @Column({ type: "mediumint", unsigned: true, nullable: true })
    strAddressId!: number;

    @Column({ type: "varchar", length: 100, nullable: true })
    strAddressA!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    strAddressB!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    strPersonA!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    strPersonB!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    strPersonC!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    strTelA!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    strTelB!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    strTelC!: string;

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

    @ManyToOne(() => Address)
    @JoinColumn({ name: "strAddressId" })
    address!: Address;
}
