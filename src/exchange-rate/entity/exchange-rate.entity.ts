import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('exchangeRates')
export class ExchangeRate extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 5, nullable: false })
    originCurrency: string;

    @Column({ length: 5, nullable: false })
    destinationCurrency: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
    rate: number;

    @Column({ type: 'boolean', default: true, nullable: false })
    active: boolean;
/*
    @Column({ length: 20, nullable: true })
    createdBy: string;

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @Column({ length: 20, nullable: true })
    updatedBy: string;

    @UpdateDateColumn({ type: 'datetime' })
    updatedAt: Date;
*/
}
