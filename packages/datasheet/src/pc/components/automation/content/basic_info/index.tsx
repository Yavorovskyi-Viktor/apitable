import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Avatar, Box, LinkButton, Switch, Typography, useThemeColors } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import {
  ChevronRightOutlined,
  DatasheetOutlined, GotoOutlined,
  PlayOutlined,
  TimeOutlined,
  UserEditOutlined
} from '@apitable/icons';
import { updateRobotItem } from '../../../robot/api';
import { useDefaultRobotDesc, useRobot } from '../../../robot/hooks';
import { useGetTaskHistory } from '../../../robot/robot_detail/robot_run_history';
import { automationHistoryAtom, automationStateAtom } from '../../controller';

import { TaskList } from '../../run_history/list/task';
import style from './styles.module.less';
const StyledGrip = styled(Box)`
    gap: 16px;
`;

const StyeldRelatedResouece = styled(Box)`
  cursor: pointer;
  &:hover {
  border-radius: var(--radiusRadiusDefault, 4px);
  background: var(--bgBglessHover, rgba(51, 51, 51, 0.06));
  }
`;

export const CONST_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const BaseInfo: FC =() => {

  const [state] = useAtom(automationStateAtom);
  const robot = state?.robot;
  const { updateRobot } = useRobot();

  const {
    items,
  } = useGetTaskHistory();

  const [, setHistoryDialog] = useAtom(automationHistoryAtom);

  const handleChangeRobot = async(isActive: boolean) => {
    if(!robot?.robotId) {
      return;
    }
    if(!state?.resourceId){
      return;
    }

    await updateRobotItem(
      String(state?.resourceId),
      robot?.robotId, {
        props: { ...robot?.props,
          failureNotifyEnable: isActive
        }
      });

  };

  const defaultDesp = useDefaultRobotDesc();


  const colors = useThemeColors();
  if(!robot) {
    return null;
  }
  return (
    <>
      <Box paddingX={'24px'} >
        <Typography variant="h5" color={colors.textCommonPrimary} className={style.title}>
          {t(Strings.summarize)}
        </Typography>
      </Box>

      <Box paddingBottom={'12px'} paddingX={'24px'} >
        {
          (robot?.triggers?.length > 0 && robot?.actions?.length > 0) ? (
            <Typography variant="body4" color={colors.textCommonTertiary}>
              {defaultDesp}
            </Typography>
          ): (
            <Typography variant="body4" color={colors.textCommonTertiary}>
              {t(Strings.no_step_summary)}
            </Typography>
          )
        }
      </Box>

      <Box paddingX={'24px'} >
        <Typography variant="h5" color={colors.textCommonPrimary} className={style.title}>
          {t(Strings.automation_detail)}
        </Typography>
      </Box>

      <StyledGrip padding={'12px 24px'} gridGap={'16px'} display={'flex'} flexDirection='column'>

        <Box display={'flex'} justifyContent={'space-between'}>
          <Box display={'inline-flex'}>
            <PlayOutlined size={16} />

            <Box alignItems={'center'} marginLeft={'8px'}>
              <Typography variant="body4" color={colors.textCommonTertiary} >
                {t(Strings.automation_runs_this_month)}
              </Typography>
            </Box>
          </Box>

          <Typography variant="body4" color={colors.textCommonPrimary}>
            {
              robot?.recentlyRunCount ?? 0
            }
          </Typography>

        </Box>

        <Box display={'flex'} justifyContent={'space-between'}>
          <Box display={'inline-flex'}>
            <UserEditOutlined size={16} />

            <Box alignItems={'center'} marginLeft={'8px'}>
              <Typography variant="body4" color={colors.textCommonTertiary}>
                {t(Strings.automation_last_edited_by)}
              </Typography>
            </Box>
          </Box>

          <Box display={'flex'} alignItems={'center'}>
            {
              robot?.updatedBy?.avatar && (
                <Avatar size={'xxs'} src={robot?.updatedBy?.avatar}
                />
              )
            }
            <Box display='flex' alignItems={'center'} marginLeft={
              '8px'
            }>
              <Typography variant="body4" color={colors.textCommonPrimary}>
                {
                  robot?.updatedBy.nickName
                }
              </Typography>
            </Box>
          </Box>

        </Box>

        <Box display={'flex'} justifyContent={'space-between'}>
          <Box display={'inline-flex'}>
            <TimeOutlined size={16} />

            <Box alignItems={'center'} marginLeft={'8px'}>
              <Typography variant="body4" color={colors.textCommonTertiary}>
                {t(Strings.field_title_last_modified_time)}
              </Typography>
            </Box>
          </Box>

          <Typography variant="body4" color={colors.textCommonPrimary}>
            {
              dayjs(
                robot?.updatedAt ?? new Date()
              ).format(CONST_DATETIME_FORMAT)
            }
          </Typography>

        </Box>

      </StyledGrip>

      <Box paddingX={'24px'} >
        <Typography variant="h5" color={colors.textCommonPrimary} className={style.title}>
          {
            t(Strings.related_files)
          }
        </Typography>
      </Box>

      {
        robot?.relatedResources?.map(item => (
          <Box padding={'0 16px'} key={item.nodeId}>
            <StyeldRelatedResouece
              padding={'12px 8px'}
              display={'flex'} alignItems={'center'} justifyContent={'space-between'}
              onClick={() => {
                window.open(`/workbench/${item.nodeId}`);
              }}
            >

              <Box display={'inline-flex'} alignItems={'center'}>
                <DatasheetOutlined size={16} />

                <Box marginLeft={'8px'} display={'inline-flex'} alignItems={'center'}>
                  <Typography variant="body4" color={colors.textCommonPrimary} >
                    {
                      item.nodeName
                    }
                  </Typography>
                </Box>
              </Box>

              <GotoOutlined />
            </StyeldRelatedResouece>
          </Box>
        ))
      }

      {
        robot?.relatedResources?.length === 0 && (
          <Box paddingX={'24px'} >
            <Typography variant="body4" color={colors.textCommonTertiary}>
              {
                t(Strings.automation_please_set_a_trigger_first)
              }
            </Typography>
          </Box>
        )
      }

      <Box justifyContent={'space-between'} alignItems={'center'} display={'flex'} paddingX={'24px'}>

        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
          <Typography variant="h5" color={colors.textCommonPrimary} className={style.title}>
            {
              t(Strings.robot_run_history_title)
            }
          </Typography>
        </Box>

        {
          items.length > 0 && (
            <LinkButton suffixIcon={<ChevronRightOutlined size={16}/>}
              underline={false}
              onClick={() => {
                setHistoryDialog(d => ({
                  ...d,
                  dialogVisible: true
                }
                ));
              }}
            >
              <Typography variant={'body3'}>
                {
                  t(Strings.automation_more)
                }
              </Typography>
            </LinkButton>
          )
        }
      </Box>

      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} paddingBottom={'5px'} paddingX={'24px'}>

        <Typography variant={'body4'} color={colors.textCommonTertiary}>
          {
            t(Strings.notify_creator_when_there_is_an_error_occurred)
          }
        </Typography>

        <Box display={'flex'} alignItems={'center'} marginLeft={'8px'}>

          <Switch size='default' checked={robot.props.failureNotifyEnable} onChange={async(v) => {
            updateRobot({
              props: {
                ...robot.props,
                failureNotifyEnable: v
              }
            });
            await handleChangeRobot(v);
          }}/>
        </Box>

      </Box>

      <Box paddingX={'24px'}>
        <TaskList list={items.slice(0, 10)} isSummary={false}/>
      </Box>
    </>
  );
};
