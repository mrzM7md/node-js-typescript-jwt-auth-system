import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity("imgSliders")
export class ImgSlider {
    @PrimaryGeneratedColumn({ type: "mediumint", unsigned: true })
    id!: number;

    @Column({ type: "tinyint", unsigned: true, default: 0 })
    slTp!: number;

    @Column({ type: "varchar", length: 80, nullable: true })
    slUrl!: string;

    @Column({ type: "varchar", length: 80, nullable: true })
    slPos!: string;
}
