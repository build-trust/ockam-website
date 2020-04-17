import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from "emotion-icons/feather/ChevronLeft";
import styled from "@emotion/styled";

import Icon from "../../Icon";
import Link from "../../Link";
import AnimateOnScroll from "../../AnimateOnScroll";
import {media} from "../../../utils/emotion";
import PageSection from "../PageSection";
import Button from "../../Button";

import JobOfferContent from "./JobOfferContent";

const Container = styled('div')`
  ${media.ultraWide`
    width: 65%
  `}
`

const JobPageSection = styled(PageSection)`
  margin-top: 10rem;
`

const BackButton = styled(Button)`
  padding-right: 0;
  padding-left: 0;
  display: inline-block;
  margin-bottom: 3rem;
  font-weight: 400;
`

const JobOfferSection = ({ job }) => {
  return (
    <JobPageSection>
      <AnimateOnScroll slideIn="left">
        <Container>
          <BackButton as={Link} variant="link" to="/team#open-roles">
            <Icon mr={3} size={24} icon={ChevronLeft} />
            All open roles
          </BackButton>
          <JobOfferContent job={job} />
        </Container>
      </AnimateOnScroll>
    </JobPageSection>
  );
};

JobOfferSection.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    additional: PropTypes.string,
    additionalPlain: PropTypes.string,
    description: PropTypes.string,
    descriptionPlain: PropTypes.string,
    applyUrl: PropTypes.string,
    categories: PropTypes.shape({
      team: PropTypes.string,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    lists: PropTypes.arrayOf({
      text: PropTypes.string,
      content: PropTypes.string,
      applyUrl: PropTypes.string,
    }),
  }),
};

JobOfferSection.defaultProps = {
  job: {
    fields: {},
    lists: {},
  },
}

export default JobOfferSection;
