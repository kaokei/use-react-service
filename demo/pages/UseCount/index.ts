import { declareProviders } from '@/index';
import Count from './Count.tsx';
import { CountService } from './CountService';

export default declareProviders([CountService])(Count);
