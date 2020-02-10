import React from 'react';
import { View } from 'react-native';
import { Progress } from '@gympass/yoga';

const ProgressPage = () => (
  <View style={{ width: 200 }}>
    <Progress max={100} value={5} />
    <Progress max={100} value={20} label={{ value: 20 }} />
    <Progress max={100} value={50} />
    <Progress max={100} value={65} label={{ value: 65, placement: 'right' }} />
    <Progress max={100} value={30} label={{ value: 'Some decription here' }} />
    <Progress
      max={100}
      value={70}
      label={{ value: 'Some decription here too', placement: 'right' }}
    />
  </View>
);

export default ProgressPage;
