import { renderRootWidget } from '@rotcare/rx-react';
import { HomePage } from '@motherboard/Home/Ui/HomePage';
import { Scene } from '@rotcare/io';

Scene.currentProject = '@rotcare/demo';
renderRootWidget(HomePage, undefined as any);