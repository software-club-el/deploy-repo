import { DateAuditEntity } from './interface/dateAudit.entity';
import { MediaEntity } from './media.entity';
import { TrainingEntity } from './training.entity';
export declare const HISOTRY_TYPES: string[];
export declare class HistoryEntity extends DateAuditEntity {
    customer_id: number;
    trainer_id: number;
    history_type: string;
    description?: string;
    perform_time: string;
    training: TrainingEntity;
    media?: MediaEntity;
}
