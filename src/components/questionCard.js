import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import avatar from "../assets/avatar.svg";
import upVote from "../assets/upVote.svg";
import downVote from "../assets/downVote.svg";
import comment from "../assets/comment.svg";
import share from "../assets/share.svg";
import favoriteActive from "../assets/favoriteActive.svg";
import favoriteInactive from "../assets/favoriteInactive.svg";
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Inter",
    background: "rgba(255, 255, 255, 0.2)",
    borderStyle: "none none solid none",
    borderColor: "#DBDBDB",
    borderWidth: "1px",
    paddingBottom: 16,
    paddingLeft: 8,
    paddingTop: 24,
  },
xsRoot: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Inter",
    background: "rgba(255, 255, 255, 0.2)",
    borderStyle: "none none solid none",
    borderColor: "#DBDBDB",
    borderWidth: "1px",
    paddingBottom: 16,
    paddingLeft: 8,
    paddingTop: 24,
  },
  avatar: {
    flex: 1,
  },
  content: {
    flex: 7,
    flexDirection: "columnn",
  },
  question: {
    flex: 1,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "16px",
    paddingBottom: 8,
    color: "var(--gray2)",
  },
  description: {
    flex: 1,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "24px",
    paddingBottom: 8,
    color: "var(--gray3)",
    opacity: 0.7,
  },
  footer: {
    paddingTop: 8,
    flex: 3,
    flexDirection: "row",
    display: "flex",
  },
  upVote: {
    flex: 1,
    flexShrink: 0,
  },
  downVote: {
    flex: 1,
    flexShrink: 0,
  },
  contentFooter: {
    flex: 13,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "24px",
    color: "var(--gray3)",
  },
  course: { color: "var(--blue)", fontWeight: "600" },
  side: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  sideFooter: {
    display: "flex",
    flexDirection: "row",
  },
  comments: {
    flex: "1",
    order: 0,
    lignItems: "flex-end",
    verticalAlign: "middle",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    color: "var(--gray4)",
  },
  shareButton: {
    flex: 1,
  },
  favorite: {
    flex: 1,
  },
  commentPadding: {
    paddingRight: 7,
  },
  xsContent: {
    display: "flex",
    marginLeft: 24,
    flexDirection: "column",
  },
  xsDescription: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  xsFooter: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
}));
export default function QuestionCard(props) {
  const {
    question,
    description,
    student,
    course,
    isFavorite,
    commentNumber,
  } = props.data;
  const classes = useStyles();
  return (
    <>
      <Hidden xsDown>
        <div className={classes.root}>
          <div className={classes.avatar}>
            <img src={avatar} />
          </div>
          <div className={classes.content}>
            <div className={classes.question}>{question}</div>
            <div className={classes.description}>{description}</div>
            <div className={classes.footer}>
              <div className={classes.upVote}>
                <img src={upVote} />
              </div>
              <div className={classes.downVote}>
                <img src={downVote} />
              </div>
              <div className={classes.contentFooter}>
                Pergunta por {student} em{" "}
                <span className={classes.course}>{course}</span>
              </div>
            </div>
          </div>
          <div className={classes.side}>
            <div className={classes.comments}>
              <img src={comment} className={classes.commentPadding} />
              {commentNumber}
            </div>
            <div className={classes.sideFooter}>
              <div className={classes.shareButton}>
                <img src={share} />
              </div>
              <div className={classes.favorite}>
                <img src={isFavorite ? favoriteActive : favoriteInactive} />
              </div>
            </div>
          </div>
        </div>
      </Hidden>
      <Hidden smUp>
        <div className={classes.xsRoot}>
          <div className={classes.xsDescription}>
            <div className={classes.avatar}>
              <img src={avatar} />
            </div>
            <div className={classes.xsContent}>
              <div className={classes.question}>{question}</div>
              <div className={classes.description}>{description}</div>
            </div>
          </div>
          <div className={classes.xsFooter}>
            <div className={classes.upVote}>
              <img src={upVote} />
            </div >
            <div className={classes.downVote}>
              <img src={downVote} />
            </div>
            <div>
              Pergunta por {student} em{" "}
              <span className={classes.course}>{course}</span>
            </div>
            <div>
              <img src={comment} className={classes.commentPadding} />
              {commentNumber}
            </div>
            <div className={classes.shareButton}>
              <img src={share} />
            </div>
            <div className={classes.favorite}>
              <img src={isFavorite ? favoriteActive : favoriteInactive} />
            </div>
          </div>
        </div>
      </Hidden>
    </>
  );
}
