import { declareProviders } from '@kaokei/use-react-service';
import Count from './Count.tsx';
import { CountService } from './CountService';

export default declareProviders([CountService])(Count);
