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

export const VikabyOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M6.78033 8.96967C6.48744 8.67678 6.01256 8.67678 5.71967 8.96967C5.42678 9.26256 5.42678 9.73744 5.71967 10.0303L7.46967 11.7803C7.76256 12.0732 8.23744 12.0732 8.53033 11.7803L10.2803 10.0303C10.5732 9.73744 10.5732 9.26256 10.2803 8.96967C9.98744 8.67678 9.51256 8.67678 9.21967 8.96967L8 10.1893L6.78033 8.96967Z" fill={ colors[0] }/>
    <path d="M7.5 6.5C7.5 7.05228 7.05228 7.5 6.5 7.5C5.94772 7.5 5.5 7.05228 5.5 6.5C5.5 5.94772 5.94772 5.5 6.5 5.5C7.05228 5.5 7.5 5.94772 7.5 6.5Z" fill={ colors[0] }/>
    <path d="M9.75 7.5C10.3023 7.5 10.75 7.05228 10.75 6.5C10.75 5.94772 10.3023 5.5 9.75 5.5C9.19772 5.5 8.75 5.94772 8.75 6.5C8.75 7.05228 9.19772 7.5 9.75 7.5Z" fill={ colors[0] }/>
    <path d="M8 1C6.15352 1 4.57903 2.14829 3.50246 3.64207C2.41959 5.14461 1.75 7.10925 1.75 9C1.75 10.9174 2.44102 12.4429 3.6138 13.481C4.77384 14.5079 6.33861 15 8 15C9.66139 15 11.2262 14.5079 12.3862 13.481C13.559 12.4429 14.25 10.9174 14.25 9C14.25 7.10925 13.5804 5.14461 12.4975 3.64207C11.421 2.14829 9.84648 1 8 1ZM3.25 9C3.25 7.43897 3.81163 5.77861 4.71936 4.51909C5.6334 3.25082 6.80891 2.5 8 2.5C9.19109 2.5 10.3666 3.25082 11.2806 4.51909C12.1884 5.77861 12.75 7.43897 12.75 9C12.75 10.5344 12.2098 11.6339 11.392 12.3578C10.5614 13.093 9.37617 13.5 8 13.5C6.62383 13.5 5.4386 13.093 4.60802 12.3578C3.79019 11.6339 3.25 10.5344 3.25 9Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'vikaby_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M6.78033 8.96967C6.48744 8.67678 6.01256 8.67678 5.71967 8.96967C5.42678 9.26256 5.42678 9.73744 5.71967 10.0303L7.46967 11.7803C7.76256 12.0732 8.23744 12.0732 8.53033 11.7803L10.2803 10.0303C10.5732 9.73744 10.5732 9.26256 10.2803 8.96967C9.98744 8.67678 9.51256 8.67678 9.21967 8.96967L8 10.1893L6.78033 8.96967Z', 'M7.5 6.5C7.5 7.05228 7.05228 7.5 6.5 7.5C5.94772 7.5 5.5 7.05228 5.5 6.5C5.5 5.94772 5.94772 5.5 6.5 5.5C7.05228 5.5 7.5 5.94772 7.5 6.5Z', 'M9.75 7.5C10.3023 7.5 10.75 7.05228 10.75 6.5C10.75 5.94772 10.3023 5.5 9.75 5.5C9.19772 5.5 8.75 5.94772 8.75 6.5C8.75 7.05228 9.19772 7.5 9.75 7.5Z', 'M8 1C6.15352 1 4.57903 2.14829 3.50246 3.64207C2.41959 5.14461 1.75 7.10925 1.75 9C1.75 10.9174 2.44102 12.4429 3.6138 13.481C4.77384 14.5079 6.33861 15 8 15C9.66139 15 11.2262 14.5079 12.3862 13.481C13.559 12.4429 14.25 10.9174 14.25 9C14.25 7.10925 13.5804 5.14461 12.4975 3.64207C11.421 2.14829 9.84648 1 8 1ZM3.25 9C3.25 7.43897 3.81163 5.77861 4.71936 4.51909C5.6334 3.25082 6.80891 2.5 8 2.5C9.19109 2.5 10.3666 3.25082 11.2806 4.51909C12.1884 5.77861 12.75 7.43897 12.75 9C12.75 10.5344 12.2098 11.6339 11.392 12.3578C10.5614 13.093 9.37617 13.5 8 13.5C6.62383 13.5 5.4386 13.093 4.60802 12.3578C3.79019 11.6339 3.25 10.5344 3.25 9Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
