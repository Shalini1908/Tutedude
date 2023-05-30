import React from "react";
import styles from "../styles/homesection.module.css";
import usersicon from "../images/users.png";
import tag from "../images/tag.png";
import rupee from "../images/rupee.png";
import wallet from "../images/wallet.png";
import offer from "../images/offer.png";

const HomeSection = () => {
  return (
    //First section.......................................................................//
    <div className={styles.main}>
      <div className={styles.UiUx}>
        <p>UI/UX &gt; Refer & Earn</p>
      </div>

      <div className={styles.container}>
        <div className={styles.midcontainer}>
          <div className={styles.innercontainer}>
            <div className={styles.box}>
              <div className={styles.box_header}>
                <p>Referal Earning</p>
                <h1 className={styles.twothousandfifty}>₹ 2,500</h1>
              </div>

              <div className={styles.box_1header}>
                <p>Total Referals</p>
                <h1 className={styles.seven}>7</h1>
              </div>

              <div className={styles.box_2header}>
                <p>Wallet Balance</p>
                <h1 className={styles.fivehundred}>₹ 500</h1>
              </div>
            </div>

            <div className={styles.withdrawl}>
              <p>Withdraw Balance</p>
            </div>
          </div>
        </div>

        <div className={styles.referalcontainer}>
          <div className={styles.referal}>
            <p>Your Referral Code</p>
          </div>

          <div className={styles.module_border_wrap}>
            <div className={styles.module}>
              <p>EDCH54</p>
            </div>
          </div>
        </div>
      </div>
{/* 
........Second Section............................................................................................................ */}

      <div className={styles.heading}>
        <p>How does it work?</p>
      </div>

      <div className={styles.content}>
        <div className={styles.usersicon}>
          <img src={usersicon} alt="users" />
        </div>

        <div className={styles.inviteyourfriends}>
          <p>Invite your Friends</p>
        </div>

        <div className={styles.para_1}>
          <p>Share the link tutedude.com with your friends</p>
        </div>

        <div className={styles.tag}>
          <img src={tag} alt="tag" />
        </div>

        <div className={styles.friendpurchase}>
          <p>Friend Purchases any course</p>
        </div>

        <div className={styles.para_2}>
          <p> Using your REFERAL CODE in the payments page</p>
        </div>

        <div className={styles.rupee}>
          <img src={rupee} alt="rupee" />
        </div>

        <div className={styles.gotreferal}>
          <p>You Got ₹200 as referral money</p>
        </div>

        <div className={styles.para_3}>
          <p>On total purchase the friend makes, into your wallet</p>
        </div>

        <div className={styles.wallet}>
          <img src={wallet} alt="wallet" />
        </div>

        <div className={styles.money}>
          <p>Transfer money from wallet</p>
        </div>

        <div className={styles.para_4}>
          <p>
            When the wallet balance reaches ₹200 or more, you can withdraw it.
          </p>
        </div>

        <div className={styles.offer}>
          <img src={offer} alt="offer" />
        </div>

        <div className={styles.gotoffer}>
          <p>Your friend got ₹200 off</p>
        </div>

        <div className={styles.para_5}>
          <p>
            When the wallet balance reaches ₹200 or more, you can withdraw it.
          </p>
        </div>
      </div>

      <div className={styles.enrolled}>
        <p>Friends Who Enrolled</p>
      </div>

      <div className={styles.terms}>
        <p>Terms & Conditions</p>
      </div>
    </div>

    
  );
};

export default HomeSection;
