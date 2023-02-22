/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const CurrencyUsdFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M8.75 1.75C8.75 1.33579 8.41421 1 8 1C7.58579 1 7.25 1.33579 7.25 1.75V2.29944C6.35748 2.41796 5.54779 2.74274 4.91102 3.1998C4.11508 3.7711 3.5 4.62367 3.5 5.6087C3.5 6.21882 3.65033 6.75005 3.95483 7.19164C4.25546 7.62762 4.66824 7.92102 5.1035 8.12509C5.74109 8.42402 6.51734 8.56807 7.25 8.66938V12.1825C6.6754 12.0777 6.17138 11.8585 5.78568 11.5816C5.22439 11.1787 5 10.727 5 10.3913C5 9.97709 4.66421 9.6413 4.25 9.6413C3.83579 9.6413 3.5 9.97709 3.5 10.3913C3.5 11.3763 4.11508 12.2289 4.91102 12.8002C5.54779 13.2573 6.35748 13.582 7.25 13.7006V14.25C7.25 14.6642 7.58579 15 8 15C8.41421 15 8.75 14.6642 8.75 14.25V13.7006C9.64252 13.582 10.4522 13.2573 11.089 12.8002C11.8849 12.2289 12.5 11.3763 12.5 10.3913C12.5 9.78337 12.3491 9.25401 12.0436 8.81444C11.7421 8.38081 11.3287 8.09001 10.894 7.88815C10.2573 7.59256 9.48182 7.45021 8.75 7.34959V3.81746C9.3246 3.92234 9.82862 4.14154 10.2143 4.41839C10.7756 4.82127 11 5.27304 11 5.6087C11 6.02291 11.3358 6.3587 11.75 6.3587C12.1642 6.3587 12.5 6.02291 12.5 5.6087C12.5 4.62367 11.8849 3.7711 11.089 3.1998C10.4522 2.74274 9.64252 2.41796 8.75 2.29944V1.75ZM7.25 3.81746C6.6754 3.92234 6.17138 4.14154 5.78568 4.41839C5.22439 4.82127 5 5.27304 5 5.6087C5 5.96429 5.08404 6.18689 5.18971 6.34012C5.29923 6.49896 5.47239 6.64136 5.74025 6.76695C6.13841 6.95362 6.64857 7.06302 7.25 7.15309V3.81746ZM8.75 8.86569V12.1825C9.3246 12.0777 9.82862 11.8585 10.2143 11.5816C10.7756 11.1787 11 10.727 11 10.3913C11 10.0399 10.9165 9.82106 10.8119 9.67063C10.7032 9.51425 10.5306 9.37325 10.2623 9.24866C9.86328 9.06341 9.35236 8.95522 8.75 8.86569Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'currency_USD_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M8.75 1.75C8.75 1.33579 8.41421 1 8 1C7.58579 1 7.25 1.33579 7.25 1.75V2.29944C6.35748 2.41796 5.54779 2.74274 4.91102 3.1998C4.11508 3.7711 3.5 4.62367 3.5 5.6087C3.5 6.21882 3.65033 6.75005 3.95483 7.19164C4.25546 7.62762 4.66824 7.92102 5.1035 8.12509C5.74109 8.42402 6.51734 8.56807 7.25 8.66938V12.1825C6.6754 12.0777 6.17138 11.8585 5.78568 11.5816C5.22439 11.1787 5 10.727 5 10.3913C5 9.97709 4.66421 9.6413 4.25 9.6413C3.83579 9.6413 3.5 9.97709 3.5 10.3913C3.5 11.3763 4.11508 12.2289 4.91102 12.8002C5.54779 13.2573 6.35748 13.582 7.25 13.7006V14.25C7.25 14.6642 7.58579 15 8 15C8.41421 15 8.75 14.6642 8.75 14.25V13.7006C9.64252 13.582 10.4522 13.2573 11.089 12.8002C11.8849 12.2289 12.5 11.3763 12.5 10.3913C12.5 9.78337 12.3491 9.25401 12.0436 8.81444C11.7421 8.38081 11.3287 8.09001 10.894 7.88815C10.2573 7.59256 9.48182 7.45021 8.75 7.34959V3.81746C9.3246 3.92234 9.82862 4.14154 10.2143 4.41839C10.7756 4.82127 11 5.27304 11 5.6087C11 6.02291 11.3358 6.3587 11.75 6.3587C12.1642 6.3587 12.5 6.02291 12.5 5.6087C12.5 4.62367 11.8849 3.7711 11.089 3.1998C10.4522 2.74274 9.64252 2.41796 8.75 2.29944V1.75ZM7.25 3.81746C6.6754 3.92234 6.17138 4.14154 5.78568 4.41839C5.22439 4.82127 5 5.27304 5 5.6087C5 5.96429 5.08404 6.18689 5.18971 6.34012C5.29923 6.49896 5.47239 6.64136 5.74025 6.76695C6.13841 6.95362 6.64857 7.06302 7.25 7.15309V3.81746ZM8.75 8.86569V12.1825C9.3246 12.0777 9.82862 11.8585 10.2143 11.5816C10.7756 11.1787 11 10.727 11 10.3913C11 10.0399 10.9165 9.82106 10.8119 9.67063C10.7032 9.51425 10.5306 9.37325 10.2623 9.24866C9.86328 9.06341 9.35236 8.95522 8.75 8.86569Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
