import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
    BaseEntity
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "mediumint", unsigned: true })
    id!: number;

    @Column({ type: "varchar", length: 45, nullable: true })
    AName!: string;

    @Column({ type: "varchar", length: 45, nullable: true })
    EName!: string;

    @Column({ type: "varchar", length: 80, nullable: true })
    EMail!: string;

    @Column({ type: "varchar", length: 80, nullable: true })
    EncrpPass!: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    esCodPass!: string;

    @Column({ type: "mediumint", nullable: true })
    createduser!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column({ type: "varchar", length: 45, nullable: true })
    tfstrdef!: string;
}

// يمكنك إنشاء الكائنات الأخرى بنفس الطريقة
