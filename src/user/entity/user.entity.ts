import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    email: string;

    @Column({ length: 250, nullable: false })
    password: string;

    @Column({ type: 'boolean', default: true, nullable: false })
    active: boolean;
/*
    @Column({ length: 20, nullable: true })
    createdBy: string;

    @CreateDateColumn({ type: 'date', default: new Date() })
    createdAt: Date;

    @Column({ length: 20, nullable: true })
    updatedBy: string;

    @UpdateDateColumn({ type: 'date', default: new Date() })
    updatedAt: Date;
*/
}
