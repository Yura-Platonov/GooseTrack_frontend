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

export const CloseButton = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  padding: 0px;
  background-color: transparent;
  border: none;
  stroke: #111111;
  transition: stroke 500ms ease-in-out;

  &:hover {
    stroke: var(--blue);
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
  padding-bottom: 8px;
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

export const ButtonContainer = styled.div`
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
