import styled from 'styled-components';
import { colors } from 'modules/common/styles';

const mainSize = '20px';
const borderRadius = '4px';
const textColor = '#1D212A';

const FlexItem = styled.div`
  display: flex;
  align-items: flex-end;
`;

const PostContainer = styled.div`
  padding: ${mainSize} ${mainSize} 15px;
  border: 1px solid ${colors.borderDarker};
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
  background: ${colors.colorWhite};
  border-radius: ${borderRadius};

  > span {
    position: absolute;
    left: ${mainSize};
    top: ${mainSize};
  }

  > p {
    font-size: 13px;
    color: ${textColor};
    border-bottom: 1px solid ${colors.borderPrimary};
    padding-bottom: 5px;
  }

  img {
    margin-bottom: 15px;
    max-width: 100%;
    border-radius: ${borderRadius};
  }
`;

const User = styled.div`
  color: ${colors.colorCoreGray};
  padding-right: ${mainSize};
  padding-left: ${props => (props.isPost ? '50px' : '40px')};
  padding-left: ${props => props.isReply && '30px'};

  > a {
    display: block;
    color: ${colors.socialFacebook};
    font-weight: 600;
    font-size: 14px;
    line-height: 1.38;
  }

  > a:hover {
    text-decoration: underline;
    color: #3a5999;
  }

  span {
    color: #616770;
    font-size: ${props => (props.isPost ? '12px' : '11px')};
    cursor: pointer;
  }

  span:hover {
    text-decoration: underline;
  }
`;

const Reply = styled.div`
  display: inline-block;
  margin-right: 5px;
  padding-left: 10px;

  > a {
    font-size: 11px;
    color: ${colors.socialFacebook};
    transition: all ease 0.9s;
    cursor: pointer;
  }

  > a:hover {
    text-decoration: underline;
    color: #3a5999;
  }
`;

const ChildPost = styled.div`
  padding: 0 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
  margin-left: ${props => props.isReply && '45px'};

  > span {
    margin-top: ${props => props.isReply && '7px'};
  }
`;

const Counts = styled.div`
  display: flex;
  justify-content: space-between;
  color: #616770;
  font-size: 11px;
  font-weight: 500;

  a {
    padding-left: 5px;
    font-size: 12px;
    color: #616770;
  }
`;

const Comment = styled.div`
  background: #eff1f3;
  border: 1px solid #ebebeb;
  padding: 8px 10px;
  border-radius: 18px;
  line-height: 16px;
  font-size: 12px;
  display: inline-block;
  position: relative;
  color: ${textColor};

  > a {
    float: left;
    padding-right: 5px;
    color: ${colors.socialFacebook};
    font-weight: 600;
  }

  > a:hover {
    text-decoration: underline;
    color: #3a5999;
  }

  p {
    margin: 0;
    display: inline;
  }

  img {
    display: block;
    margin-top: 7px;
  }
`;

const ReplyReaction = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.colorWhite};
  border-radius: 10px;
  font-size: 11px;
  padding: 2px;
  margin-left: -10px;
  z-index: 5;
  height: 22px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  > a {
    color: ${colors.textPrimary};
    padding: 0 3px 0 8px;
  }
`;

const Reaction = styled.div`
  width: 18px;
  height: 18px;
  display: inline-block;
  margin-right: ${props => (props.comment ? '-5px' : '3px')};
  background-image: url('/images/reactions.png');
  border: 1px solid ${colors.colorWhite};
  border-radius: 10px;
  cursor: pointer;

  &.haha {
    background-position: 84px;
  }
  &.wow {
    background-position: 16px;
  }
  &.love {
    background-position: 50px;
  }
  &.like {
    background-position: 67px;
  }
  &.sad {
    background-position: 33px;
  }
`;

const Footer = styled.div`
  text-align: right;
`;

const ImageContainer = styled.div`
  padding: 10px;

  img {
    width: ${props => props.full && '70px'};
    height: ${props => props.full && '70px'};
    border: 1px solid ${colors.borderPrimary};
    margin-right: 5px;
    padding: 10px;
    max-width: ${props => props.isComment && '400px'};
  }

  > div {
    display: inline;
  }
`;

const LeftAlign = styled.div`
  text-align: left;
  font-size: 11px;
`;

export {
  PostContainer,
  User,
  ChildPost,
  Comment,
  Counts,
  Reaction,
  Reply,
  FlexItem,
  ReplyReaction,
  Footer,
  ImageContainer,
  LeftAlign
};
