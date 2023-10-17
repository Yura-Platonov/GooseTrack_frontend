import {
  Container,
  HiddenH2,
  Ul,
  Li,
  TitleH3,
  NumberSpan,
  AccentH3,
  Text,
  ThumbDiv,
} from './Description.styled';

import calendar_mob from '../../../images/Description/calendar-mob.jpg';
import calendar_mob2x from '../../../images/Description/calendar-mob2x.jpg';
import calendar_tab from '../../../images/Description/calendar-tab.jpg';
import calendar_tab2x from '../../../images/Description/calendar-tab2x.jpg';
import calendar_desk from '../../../images/Description/calendar-desk.jpg';
import calendar_desk2x from '../../../images/Description/calendar-desk2x.jpg';

import sidebar_mob from '../../../images/Description/sidebar-mob.jpg';
import sidebar_mob2x from '../../../images/Description/sidebar-mob2x.jpg';
import sidebar_tab from '../../../images/Description/sidebar-tab.jpg';
import sidebar_tab2x from '../../../images/Description/sidebar-tab2x.jpg';
import sidebar_desk from '../../../images/Description/sidebar-desk.jpg';
import sidebar_desk2x from '../../../images/Description/sidebar-desk2x.jpg';

import all_in_one_mob from '../../../images/Description/all_in_one_mob.jpg';
import all_in_one_mob2x from '../../../images/Description/all_in_one_mob2x.jpg';
import all_in_one_tab from '../../../images/Description/all_in_one_tab.jpg';
import all_in_one_tab2x from '../../../images/Description/all_in_one_tab2x.jpg';
import all_in_one_desk from '../../../images/Description/all_in_one_desk.jpg';
import all_in_one_desk2x from '../../../images/Description/all_in_one_desk2x.jpg';

export const Description = () => {
  return (
    <Container>
      <HiddenH2>Description</HiddenH2>
      <Ul>
        <Li>
          <div>
            <TitleH3>
              <NumberSpan>1.</NumberSpan>
              <AccentH3>Calendar</AccentH3>
              View
            </TitleH3>
            <Text>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </Text>
          </div>
          <ThumbDiv>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`${calendar_mob} 1x, ${calendar_mob2x} 2x`}
              />
              <source
                media="(max-width: 1279px)"
                width="604px"
                srcSet={`${calendar_tab} 1x, ${calendar_tab2x} 2x`}
              />
              <source
                media="(min-width: 1280px)"
                width="604px"
                srcSet={`${calendar_desk} 1x, ${calendar_desk2x} 2x`}
              />

              <img src={`${calendar_mob}`} alt="Calendar landing" />
            </picture>
          </ThumbDiv>
        </Li>
        <Li>
          <div>
            <TitleH3>
              <NumberSpan>2.</NumberSpan>
              Sidebar
            </TitleH3>
            <Text>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </Text>
          </div>
          <ThumbDiv>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`${sidebar_mob} 1x, ${sidebar_mob2x} 2x`}
              />
              <source
                media="(max-width: 1279px)"
                srcSet={`${sidebar_tab} 1x, ${sidebar_tab2x} 2x`}
              />
              <source
                media="(min-width: 1280px)"
                srcSet={`${sidebar_desk} 1x, ${sidebar_desk2x} 2x`}
              />

              <img src={`${sidebar_mob}`} alt="Calendar landing" />
            </picture>
          </ThumbDiv>
        </Li>
        <Li>
          <div>
            <TitleH3>
              <NumberSpan>3.</NumberSpan>
              <AccentH3>All in</AccentH3>
              One
            </TitleH3>
            <Text>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </Text>
          </div>
          <ThumbDiv>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`${all_in_one_mob} 1x, ${all_in_one_mob2x} 2x`}
              />
              <source
                media="(max-width: 1279px)"
                srcSet={`${all_in_one_tab} 1x, ${all_in_one_tab2x} 2x`}
              />
              <source
                media="(min-width: 1280px)"
                srcSet={`${all_in_one_desk} 1x, ${all_in_one_desk2x} 2x`}
              />

              <img src={`${all_in_one_mob}`} alt="Calendar landing" />
            </picture>
          </ThumbDiv>
        </Li>
      </Ul>
    </Container>
  );
};
