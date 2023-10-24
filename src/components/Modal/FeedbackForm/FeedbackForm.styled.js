import styled from 'styled-components';

export const Container = styled.div`
  min-width: 280px;
  padding: 28px 20px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: var(--white);
  box-shadow: var(--box-shadow);

  @media screen and (min-width: 375px) {
    width: 295px;
  }
  @media screen and (min-width: 768px) {
    width: 404px;
    padding: 32px 32px;
  }
`;

export const RatingContainer = styled.div`
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 24px;
  }
`;

export const RatingTitle = styled.div`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  padding-bottom: 8px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

export const FormCloseButton = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  padding: 0px;
  background-color: transparent;
  border: none;
  color: #111111;
  transition: color 500ms ease-in-out;

  &:hover {
    color: var(--blue);
  }

  @media screen and (min-width: 768px) {
    right: 18px;
    top: 18px;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ReviewLabel = styled.label`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

export const Textarea = styled.textarea`
  min-height: 110px;
  padding: 20px;
  background-color: var(--form-textarea);
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #343434;
  border: none;
  border-radius: 8px;
  resize: none;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);

  &::placeholder {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    color: #343434;
  }
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: 14px;

  @media screen and (min-width: 768px) {
    padding-top: 18px;
  }
`;

export const SubmitButton = styled.button`
  width: 144px;
  padding: 12px 0;
  color: var(--white);
  background-color: var(--blue);
  border-radius: 8px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06em;
  border: none;
  text-shadow: var(--text-shadow);
  box-shadow: var(--box-shadow);
  transition: var(--transition);

  &:hover {
    color: var(--black);
    box-shadow: var(--box-shadow-hover);
  }

  @media screen and (min-width: 768px) {
    width: 198px;
    padding: 15px 0;
  }
`;

export const CancelButton = styled.button`
  width: 144px;
  padding: 12px 0;
  color: #343434;
  background-color: var(--review-pop-up-cancel-btn);
  border-radius: 8px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06em;
  border: none;
  text-shadow: var(--text-shadow);
  box-shadow: var(--box-shadow);
  transition: var(--transition);

  &:hover {
    color: var(--white);
    box-shadow: var(--box-shadow-hover);
  }

  @media screen and (min-width: 768px) {
    width: 198px;
    padding: 15px 0;
  }
`;

export const ReviewHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const ReviewBtnContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const ReviewEditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: var(--user-panel-active);
  color: var(--blue);
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 4px 1px rgba(62, 133, 243, 0.75);
  transition:
    background-color 500ms ease-in-out,
    color 500ms ease-in-out,
    box-shadow 200ms ease-in-out;

  &:hover {
    background-color: var(--blue);
    color: var(--white);
    box-shadow: 0px 0px 8px 0px rgba(62, 133, 243, 0.75);
  }
  &:focus {
    background-color: var(--blue);
    color: var(--white);
    box-shadow: 0px 0px 8px 0px rgba(62, 133, 243, 0.75);
  }
`;
export const ReviewDeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #ea3d6520;
  color: var(--day-status-high);
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 4px 1px rgba(234, 61, 101, 0.75);
  transition:
    background-color 500ms ease-in-out,
    color 500ms ease-in-out,
    box-shadow 200ms ease-in-out;

  &:hover {
    background-color: var(--day-status-high);
    color: var(--white);
    box-shadow: 0px 0px 8px 0px rgba(234, 61, 101, 0.75);
  }
`;

export const ValidationMessage = styled.div`
  padding-top: 8px;
  color: red;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const faStarStyle = {
  cursor: 'pointer',
};
