import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('testimonial')
export class TestimonialEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'longtext' })
  testimonial: string;

  @CreateDateColumn()
  createdAt: Date;
}
