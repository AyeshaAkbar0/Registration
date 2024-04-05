// import React, { useState } from 'react';
// import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
// import termDocx from './asset/page2/doc.pdf';

// function App1() {
//   const [error, setError] = useState(null);

//   const docs = [
//     { uri: termDocx, fileType: 'docx', fileName: 'demo.docx' } // Local File
//   ];

//   return (
//     <>
//       {error && <p>Error: {error.message}</p>}
//       <DocViewer
//         documents={docs}
//         pluginRenderers={DocViewerRenderers}
//         style={{ height: 1000 }}
//         onError={setError}
//       />
//     </>
//   );
// }

// export default App1;

import DocViewer, { DocViewerRenderers } from "@r-uis/doc-viewer";
import termDocx from "./asset/page2/term.docx";
//import {PDFRendererfrom} from "./pdf";

// function App1() {
//   const docs = [

//     {
//       uri: 'https://calibre-ebook.com/downloads/demos/demo.docx',
//     //uri:'https://docs.google.com/document/d/1vud2zZvYsc5MJW-IMdav-AW__DZfqCHX/',
//      // fileType: termDocx,
//       fileType: 'docx',
//       fileName: 'demo.docx' } // Local File
//   ];

//   return <DocViewer documents={docs}
//  pluginRenderers={DocViewerRenderers}
//   style={{ height: 1000 }} />;
// }
// export default App1;

import React from "react";
import bg from "./asset/page2/bg.png";
import logo from "./asset/page4/logo.png";
import term from "./asset/page2/term.png";
import cross from './asset/page3plus/cross.png'
import { useNavigate } from "react-router-dom";

export default function Screen3() {
  const navigate = useNavigate();

  const handleCross=()=>{
      navigate('/privacy');
  }
  const docs = [
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      //uri:'https://docs.google.com/document/d/1vud2zZvYsc5MJW-IMdav-AW__DZfqCHX/',
      // fileType: termDocx,
      fileType: "docx",
      fileName: "demo.docx",
    }, // Local File
  ];
  return (
    <div
      style={{
        // backgroundImage: `url(${bg})`,
        // backgroundSize: "contain",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        // backgroundSize: "100% 100%",
        // minHeight: "100vh",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // flexDirection: "column",
        // position: "absolute",
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
   

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "80%",
        }}
      >
           <img
        src={logo}
        alt="Registration"
        style={{
          position: "absolute",
          width: "65%", // Make the image take up the full width of the container
          height: "10%",
          marginTop:"-20%" ,
         // marginBottom: "135%",
          marginLeft: "8%", // Maintain aspect ratio
        }}
      />
        <img
          src={term}
          alt="term"
          style={{
            position: "absolute",
            maxWidth: "100%",
            height: "90%",
            zIndex: 0,
            width: "70%",
          }}
        />
        <img src={cross}
        onClick={handleCross}
      //  onTouchEnd={handleCross}
        style={{ 
          //height:"9%",
        position:"absolute",
        cursor:'pointer',
        width:"4%",
        position:'absolute',
        top:"5%",
        marginLeft:'55%'}}>
        </img>
         {/* <div
        onClick={handleCross}
        style={{backgroundImage : `url(${cross})`,
       // backgroundColor:'red',
        height:"9%",
        width:"2%",
        position:'absolute',
        top:"10%",
        marginLeft:'60%'


    
    }}
        >

        </div> */}
        {/* <p  style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)',
         backgroundColor: 'black', border: 'none', width: '65%', height: '65%' }}>

         


         </p> */}
        {/* <DocViewer documents={docs} 
pluginRenderers={DocViewerRenderers}
 style={{ height: "40%", width:"50%", zIndex:1, position:'absolute', marginTop:'25%' }} />; */}
      </div>

      <p
        // style={{
        //   height: "40%",
        //   width: "50%",
        //   zIndex: 1,
        //   position: "absolute",
        //   marginTop: "25%",
        //   color: "white",
        // }}

        style={{
          height: "20em", // Set the height to 7 lines (assuming 1 line = 1em)
          overflowY: "scroll", // Enable vertical scrollbar
          color: "white",
          padding: "10px",
          zIndex: 1,
          marginTop: "20%",
          //   height: "40%",
          width: "70%",

          //   zIndex: 1,
          // Add some padding for better readability
        }}
      >
        TERMS & CONDITIONS The www.yslbeauty.ae website (the “Website”) is
        operated by Saj Emirates trading L.L.C, authorized distributor and
        retailer of Yves Saint Laurent, a limited liability company duly
        organized under the laws of the United Arab Emirates, under the
        Commercial License number 539400, whose registered address is at P.O.
        Box 8413, Dubai, United Arab Emirates and whose paid up share capital is
        300,000 United Emirates Arabic Dirhams (“YSL”, “us”, “we”, “our”). The
        Website is provided to you for your personal use subject to these terms
        and conditions and any other rules posted on the Website (including our
        Privacy Policy) (the “Terms and Conditions”). By visiting the Website
        you agree to be bound by, consent to comply with, and consent to the
        practices described in, these Terms and Conditions, which govern your
        access and use of the Website and all content and functionalities
        available on the Website (or any of our other websites and related
        micro-sites accessed through the URL www.yslbeauty.ae and related domain
        names) (the “Services”). If you wish to use our Services you must read
        and agree to be bound by our policies relating to those Services. In
        particular, your attention is drawn to our policies relating to the
        terms of purchase and our Privacy Policy. If you are a minor and/or are
        aged under 18, you must let your parent or guardian know about our
        Privacy Policy before you register to use this Website or any of the
        Services. We grant you a non-transferable and revocable personal license
        to use the software that is provided to you by us as part of the
        Website, for the sole purpose of enabling you to use and enjoy the
        benefit of our Services, as provided by YSL in the manner permitted by
        the Terms and Conditions. Commercial use or use on behalf of any third
        party is prohibited, except as explicitly permitted by us in writing in
        advance. Any breach of these Terms and Conditions shall result in the
        immediate revocation of the license granted in this paragraph without
        notice to you, and without prejudice to any other rights of YSL.
        REGISTRATION Certain Services and related features, such as but not
        limited to, newsletters, that may be made available on the Website may
        require registration or subscription to enable your use of them. Should
        you choose to register or subscribe for any such Services or related
        features, you agree to provide complete, accurate and current
        information about yourself, and to promptly update such information if
        there are any changes. We may change our registration or subscription
        requirements from time to time. As a user of the Website you are solely
        responsible for keeping passwords and other account identifiers safe and
        secure. As a user of the Website you are entirely responsible for all
        activities that occur under such password or account. Furthermore, you
        must notify us immediately of any unauthorized use of your password or
        account. YSL shall not be responsible or liable, directly or indirectly,
        in any way for any loss or damage of any kind incurred as a result of,
        or in connection with, your failure to comply with this paragraph. You
        may be liable for our losses or others due to such unauthorized use.
        Please refer to our Privacy Policy for information about how we use your
        data. YOUR CONTENT You are responsible for your use of the Website, for
        any information, text, graphics, photos or other materials which you
        upload or post to the Website (collectively “Your Content”), and for any
        consequences thereof. Most content you submit, post, or display through
        the Website is public by default and will be able to be viewed by other
        users and through third party services and websites. You should only
        provide content that you are comfortable sharing with others under these
        Terms and Conditions. When posting Your Content, you agree not to make
        comments that are not factual in nature including without limitation
        making any racist comments, using profanity, abusing another user,
        disrespecting another culture or any other derogatory or inappropriate
        comments. We may not monitor or control Your Content and, we cannot take
        responsibility for Your Content. Any use or reliance on Your Content, or
        content provided by any party other than YSL (such as other users)
        (“Other Content”) or obtained by you through the Website is at your own
        risk. Your Content may be moderated and may take up to 48 hours to be
        displayed but YSL does not commit to checking all Your Content or Other
        Content and will not be liable for the same. If you have a complaint
        about any posts please contact our Customer Care. YSL reserves the
        right, in its sole discretion, not to publish or to remove any Your
        Content or Other Content that it believes may be unlawful, defamatory,
        racist or libelous, incite hatred or violence, detrimental to people,
        institutions, religions or to people's privacy, which may cause harm to
        minors, is detrimental to the trade marks, patents and copyrighted
        content, contains personal data or improperly uses the medium for
        promoting and advertising businesses. We do not endorse, support,
        represent or guarantee the completeness, truthfulness, accuracy, or
        reliability of Other Content or endorse any opinions expressed via the
        Website. You understand that by using the Website, you may be exposed to
        Other Content that might be offensive, harmful, inaccurate or otherwise
        inappropriate, or in some cases, postings that have been mislabeled or
        are otherwise deceptive. Under no circumstances will we be liable in any
        way for any of Your Content or Other Content, including, but not limited
        to, any errors or omissions in Your Content or Other Content, or any
        loss or damage of any kind incurred as a result of the use of Your
        Content or Other Content posted, emailed, transmitted or otherwise made
        available via the Website or broadcast elsewhere. You retain your rights
        to Your Content. By submitting, posting or displaying Your Content on or
        through the Website, you grant us a worldwide, non-exclusive,
        royalty-free license (with the right to sublicense) to use, copy,
        reproduce, process, adapt, modify, publish, transmit, display and
        distribute Your Content in any and all media or distribution methods
        (now known or later developed). You agree that this license includes the
        right for YSL to provide, promote, and improve the services it provides
        and to make Your Content available to other companies, organizations or
        individuals who partner with YSL for the syndication, broadcast,
        distribution or publication of Your Content on other media and services,
        subject to our terms and conditions for Your Content use. Such
        additional uses by YSL, or other companies, organizations or individuals
        who partner with YSL, may be made with no compensation paid to you with
        respect to Your Content. We may modify or adapt Your Content in order to
        transmit, display or distribute it over computer networks and in various
        media and/or make changes to Your Content as are necessary to conform
        and adapt Your Content to any requirements or limitations of any
        networks, devices, services or media. We reserve the right at all times
        (but will not have an obligation) to remove or refuse to distribute any
        of Your Content, to suspend or terminate users, and to reclaim usernames
        without liability to you. We also reserve the right to access, read,
        preserve, and disclose any information as we reasonably believe is
        necessary to (i) satisfy any applicable law, regulation, legal process
        or governmental request, (ii) enforce the Terms and Conditions,
        including investigation of potential violations hereof, (iii) detect,
        prevent, or otherwise address fraud, security or technical issues, (iv)
        respond to user support requests, or (v) protect the rights, property or
        safety of YSL, its users and the public. You may not do any of the
        following while accessing or using the Website: (i) access, tamper with,
        or use non-public areas of the Website, our computer systems, or the
        technical delivery systems of our providers; (ii) probe, scan, or test
        the vulnerability of any system or network or breach or circumvent any
        security or authentication measures; (iii) access or search or attempt
        to access or search the Website by any means (automated or otherwise)
        other than through our currently available, published interfaces that
        are provided by us (and only pursuant to the Terms and Conditions),
        unless you have been specifically allowed to do so in a separate
        agreement with us; (iv) forge any TCP/IP packet header or any part of
        the header information in any email or posting, or in any way use the
        Website to send altered, deceptive or false source-identifying
        information; or (v) interfere with, or disrupt, (or attempt to do so),
        the access of any user, host or network, including, without limitation,
        sending a virus, overloading, flooding, spamming, mail-bombing the
        Website, or by scripting the creation of Your Content in such a manner
        as to interfere with or create an undue burden on the Website.
        ELIGIBILITY The purchase of products through the Website is strictly
        limited to parties who can lawfully enter into and form contracts on the
        Internet in accordance with the laws of the United Arab Emirates. In
        order to make purchases on the Website, you must provide your personal
        details, including your real first and last name, valid mobile telephone
        number, alternate contact phone number, valid e-mail address, payment
        details, valid billing address and other requested information as
        indicated. You represent and warrant that the payment details you
        provide are valid, complete and correct and confirm that you are the
        person referred to in the billing information provided. The Website is
        only available to persons who meet YSL terms of eligibility, those who
        hold a valid credit/debit card by a bank acceptable to YSL, and those
        who have authorized us to process a charge or charges on their
        credit/debit card in the amount of the total purchase price for the
        product(s) which they purchase. Products purchased are for personal or
        gift use only and shall not be re-sold, used for commercial purposes or
        for any other commercial benefit. YSL reserves the right to restrict
        multiple quantities of an item being shipped to any one customer or
        delivery address. By making an offer to purchase products(s), you
        expressly authorize YSL to perform credit checks and to transmit or
        obtain your credit/debit card information or credit report information
        (including any updated information) to or from third parties to
        authenticate your identity, validate your credit/debit card, obtain an
        initial credit/debit card authorization and/or authorize individual
        purchase transactions, as we deem necessary. You agree that we may use
        personal information provided by you in order to conduct appropriate
        anti-fraud checks and such personal information may be disclosed to a
        credit reference or fraud prevention agency, which may keep a record of
        that information. Please refer to our Privacy Policy for information
        about how we use your data. ORDERS FOR THE PRODUCTS The products
        appearing for sale on the Website are subject to acceptance and
        availability. If, for any reason following the placement of an order for
        product(s), we are unable to supply a particular product, we will inform
        you as soon as possible, cancel your order in respect of the relevant
        product(s) and refund you or re-credit your account for any sum that has
        been paid by you or debited from your credit/debit card for the
        product(s) which cannot be supplied by us. Please note that you can
        order up to six (6) items of a product. All orders are subject to
        acceptance. We reserve the right to refuse or cancel an order for any
        reason, including inaccuracies, or errors in product or pricing
        information, that we are unable to obtain authorization for payment,
        that shipping restrictions apply to a particular item, that the item
        ordered does not satisfy our quality control standards and is withdrawn,
        or that you do not meet the eligibility criteria set-out within the
        Terms and Conditions or any other problem identified by us. YSL will
        store a record of your transactions for as long as necessary to perform
        the Services and as legally required. Once your order has been placed,
        you will receive an email acknowledging the details of your order. This
        email is not an acceptance of your order, it is a confirmation that we
        have received it. Unless cancelled, acceptance of your order will be
        perfected upon completion of the packing of your order by us. Completion
        of the contract between you and YSL will be perfected when we dispatch
        the products to you, at which time you will receive a second email
        confirming that your order has been dispatched. The sale contract is
        therefore concluded in Dubai, United Arab Emirates and the language of
        the contract is English. Neither our third-party payment processor nor
        our nominated courier has the authority to accept an order on behalf of
        YSL. We may refuse to process a transaction for any reason or refuse
        service to anyone at any time at our sole discretion. We will not be
        liable to you or any third party by reason of our withdrawing any
        product from the Website, whether or not that product has been sold,
        removing, screening or editing any materials or content on the Website,
        refusing to process a transaction or unwinding or suspending any
        transaction after processing has begun. Every effort is made to make
        sure all details on the Website are accurate, however we may from time
        to time discover an error in the pricing of products. If we discover an
        error in the pricing of a product in your order, we will let you know as
        soon as possible. We shall be under no obligation to accept or fulfil an
        order for a product that was advertised at an incorrect price and
        reserve the right to cancel such an order that has been accepted or is
        in transit. If you order a product that is priced incorrectly, we will
        email or telephone you to inform you that we have not accepted your
        order and/or that the relevant part of your order has been cancelled. If
        you have already paid for the product(s), we shall refund the full
        amount or re-credit your account in such sum as soon as we are able. In
        the event that products are recalled in transit, we will process your
        refund/re-credit once the products have been returned to us. By
        confirming your purchase at the end of the order process, you agree to
        accept and pay the full amount payable for the product(s) as set out in
        your order, including any delivery charges applicable to that order.
        PRICES AND PAYMENT POLICY The price of the products shown on the Website
        and delivery charges are shown in your local currency and are inclusive
        of any applicable taxes or import duties. Delivery charges will be added
        to the price of the products and will be indicated in your local
        currency, separately on the order form during the check-out process. If
        you are a customer whose credit/debit card is not denominated in United
        Arab Emirates Dirhams, the final price will be calculated in accordance
        with the applicable exchange rate on the day your card issuer processes
        the transaction. We accept the following forms of payment: -
        credit/debit card: VISA/MASTERCARD/AMERICAN EXPRESS - cash on delivery
        (“COD”) All credit/debit card payments are subject to validation checks
        and authorization by the issuer. If the issuer of the credit/debit card
        refuses to authorize payment, we will not be liable for any delay or
        non-delivery. We will cancel your order and contact you for an
        alternative method of payment. The details on the credit/debit card used
        to make the payment must match the exact ID information of the
        cardholder as held by the issuer. Payment will be debited and cleared
        from your account upon completion of the shipping of your order by YSL.
        You confirm that the credit/debit card that is being used is yours or
        that you have been specifically authorized by the owner of the
        credit/debit card to use it. No credit/debit cards’ details will be
        stored, sold, shared, rented or leased to any third parties except by
        our online payment gateway service provider. We take reasonable care to
        make the Website secure. Rest assured that your card number will be
        protected using SSL (Secure Socket Layer). SSL is a security technology
        that encrypts your card details and provides a secure connection between
        Internet browsers and websites, allowing you to transmit private data
        online. We take reasonable care, in so far as it is in our power to do
        so, to keep the details of your order and payment secure, but in the
        absence of negligence on our part we cannot be held liable for any loss
        you may suffer if a third party procures unauthorized access to any data
        you provide when accessing or ordering from the Website. DELIVERY YSL
        delivers to the United Arab Emirates.. YSL will deliver your order to
        the address specified in your order. Delivery charges will be indicated
        during your check out process, in your local currency. Orders may not be
        shipped to P.O. boxes, AFO/FPO addresses or to any address outside the
        United Arab Emirates. If no one is available to accept delivery of the
        order, you will have the option to arrange for an alternative delivery
        date or be given additional information about the collection of your
        order from the courier company. CANCELLATION, RETURN & EXCHANGE POLICY
        It is our intention to ensure our customers are satisfied with their
        purchases from us. Cancellation We fully understand that sometimes you
        might change your mind regarding your purchase. If you change your mind
        before receiving your order, just call our Customer Care at
        0097148167199 to cancel your order and we will use all reasonable
        endeavors to cancel it providing your order has not yet been processed.
        If your order has already been processed, such cancelation will be
        treated as a return. Please refer to our Return section below for
        further information. In all circumstances, you can always contact our
        Customer Care who will be happy to assist you. Return You may return the
        product(s) to us by courier: You can request a return, free of charge,
        via your My Account section and our Customer Care will arrange for a
        free pick up via our partner courier service. All products must be
        returned to us unused and with all YSL tags, if any, still attached and
        in the same condition as received, in their original box and packaging,
        along with the original invoice within 14 days of the date of purchase
        of your order. We will not accept any returns if the original packaging
        has been opened or tampered with. Returns that are damaged or soiled may
        not be accepted and may be returned to you. Once we have received and
        inspected the returned product(s) and approved the return by email to
        you, we will refund the price paid by you for the product(s), with the
        exception of applicable taxes or import duties and delivery and return
        charges. If you receive a wrong product, or a product received by you is
        damaged or defective, or if you simply wish to return your product for
        any reason, please contact our Customer Care which will assist you with
        your return request within two (2) business days. Products are damaged
        or defective if they are received damaged or where a manufacturing fault
        occurs within six (6) months of purchase. Items that are damaged as a
        result of normal wear and tear are not considered to be damaged or
        defective. Where possible, we will offer to repair defective items. For
        all defective items outside of our Return Policy, please contact our
        Customer Care at 0097148167199. Should you receive an item that is not
        in perfect condition please contact us immediately. Please send all
        items you wish to return from an order in the same shipment to ensure
        your return is processed as quickly as possible. If you paid: - by
        credit/debit card, we will process the refund by crediting the same
        credit/debit card used when the order was placed. Please note that
        refunds can take up to ten (10) business days to show on your account
        due to varying processing times between payment providers; - by cash on
        delivery, if you decide to return the product in store, you will be
        offered the option to receive a store credit note to be used within our
        store only. If you received an item as a gift and wish to return it,
        please contact our Customer Care who will be happy to assist you in your
        request. All products must be unused and with all YSL tags still
        attached and in the same condition as received, in their original box
        and packaging, with the original invoice within 30 days of the date of
        your order. Custom-made products Please note that any custom-made
        product may not be refunded or exchanged. PRODUCTS LIABILITY By buying
        products through our Website, you acknowledge and agree that YSL carries
        no product liability save as described in the preceding paragraphs in
        relation to returning and exchanging the products or refunding/crediting
        the price paid, and that full liability for the products rests with the
        manufacturer. The terms of the manufacturer’s product liability are
        found in the product’s package or in the notice that accompanies the
        products. INTELLECTUAL PROPERTY All copyright, trademarks, trade names,
        trade dress, designs, the “look and feel” of the Website, other
        intellectual property and material, rights on and relating to the
        Website including software and all HTML and other code contained in the
        Website, page headers, images, texts, illustrations, formats, logos,
        designs, icons, photographs, programs, music clips or downloads and
        video clips (collectively, the “IP”) are and shall at all times remain
        vested in YSL and/or are the property of their respective owners, and
        are protected by the United Arab Emirates and international trademark
        and copyright laws. You may access, view, download, and print the IP and
        all other materials displayed on our Website for your personal,
        non-commercial use only as expressly authorized by YSL and/or its third
        party licensors provided, however, that you (i) do not modify or alter
        the IP in any way; and (ii) do not provide or make available the IP to
        any third party in a commercial manner. You will not acquire any
        copyright, trademark or other proprietary rights whatsoever in the IP.
        No license, right, title, or interest in any materials or software is
        transferred to you as a result of your use of the Website or your
        accessing, viewing, downloading, or printing of the IP. You may not
        reproduce (except as noted above), publish, transmit, distribute,
        display, modify, create derivative works from, sell or participate in
        any sale of or exploit in any way, in whole or in part, any of the IP or
        our Website. The IP may be used only as a shopping resource. Any other
        use, including the reproduction, modification, distribution,
        transmission, republication, display, or performance of the IP is
        strictly prohibited. YSL is the exclusive owner or licensee of the IP
        (as applicable) and is the exclusive licensee of the www.yslbeauty.ae
        domain name. CONTENT YSL provides no warranty as to the accuracy of the
        content on the Website, nor does it warrant that such content is error
        free or reliable or that your use of the content will not infringe the
        rights of third parties. YSL does not warrant that the functional
        aspects of the Website or its content will be error free or that the
        Website, its content or the server that makes it available are free of
        viruses or other harmful components. If your use of the same results in
        any damage or the need for servicing or replacing property, material,
        equipment or data, YSL is not responsible in any way for those costs.
        YSL makes no warranty regarding the Website’s content, software, text,
        downloads, graphics or links, or any results from using the Website and
        you bear the entire risk of the completeness, accuracy or usefulness of
        any content on this Website. YSL reserves the right to withdraw any
        content from the Website at any time and for any reason. Removal may be
        immediate and without notice. You confirm that YSL is not liable to you
        or any third party for any such withdrawal. We endeavor to provide an
        accurate description of the products on our Website and to display the
        colors of the products as accurately as possible. We cannot guarantee
        that your monitor’s display of any color will be accurate. The personal
        opinions of the designers and labels whose products we sell, or any
        third parties with whom we are associated are their own and do not
        necessarily reflect the views of YSL and we accept no responsibility for
        any such views expressed in any media. INDEMNIFICATION You agree, at our
        request, to defend, indemnify, and hold harmless YSL and its affiliates,
        including their officers, directors, agents, suppliers and licensors
        from and against any and all claims, damages, costs, and expenses,
        including attorneys’ fees, arising from or related to your use of the
        Website, any breach by you of these Terms and Conditions or the use by
        any other person accessing the Website using your Internet account. YSL
        reserves the right, at our own expense, to assume the exclusive control
        of any matter otherwise subject to indemnification by you hereunder, and
        such right and indemnification will survive these Terms and Conditions
        and your use of the Website. AVAILABILITY You acknowledge that (i) it is
        technically impossible that the Website will be provided free of
        defaults and that YSL cannot take any responsibility for this, (ii) that
        defaults may lead to the temporary unavailability of the Website, and
        that (iii) the operation of the Website may be adversely affected by
        conditions and performances outside YSL’s control, such as, for example,
        transmission and telecommunication links between YSL and you and between
        YSL and other systems and networks. YSL may at any time, temporarily or
        permanently modify or interrupt, all or part of the Website in order to
        perform maintenance work and/or make improvements and/or changes to the
        Website. YSL is not liable for any modification to or suspension or
        interruption of the Website. DISCLAIMER OUR WEBSITE IS PROVIDED BY YSL
        ON AN “AS IS” AND “AS AVAILABLE” BASIS. YSL MAKES NO REPRESENTATIONS OR
        WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF OUR
        WEBSITE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON
        OUR WEBSITE. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, YSL
        DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED
        TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, SATISFACTORY QUALITY, REASONABLE CARE AND SKILL OR
        NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, YSL DISCLAIMS ANY AND
        ALL WARRANTIES, EXPRESS OR IMPLIED, FOR ANY MERCHANDISE OFFERED ON OUR
        WEBSITE. YOU ACKNOWLEDGE, BY YOUR USE OF THE WEBSITE, THAT YOUR USE OF
        OUR WEBSITE IS AT YOUR SOLE RISK. THIS DISCLAIMER DOES NOT APPLY TO ANY
        PRODUCT WARRANTY OFFERED BY THE MANUFACTURER OF THE PRODUCT. THIS
        DISCLAIMER CONSTITUTES AN ESSENTIAL PART OF THESE TERMS AND CONDITIONS.
        LIMITATION OF LIABILITY Nothing in these Terms and Conditions is
        intended to affect your rights as a consumer under the laws of the
        United Arab Emirates. The use of the Website or any of the Services or
        products available thereon is at your own risk, and unless otherwise
        stated in these Terms and Conditions, you assume full responsibility and
        risk of loss resulting from your use of the Website or any of the
        Services or products available thereon. UNDER NO CIRCUMSTANCES AND UNDER
        NO LEGAL OR EQUITABLE THEORY, WHETHER IN TORT, CONTRACT, STRICT
        LIABILITY OR OTHERWISE, SHALL YSL OR ANY OF ITS AFFILIATES, EMPLOYEES,
        DIRECTORS, OFFICERS BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR ANY
        INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL LOSSES OR DAMAGES OF ANY
        NATURE ARISING OUT OF OR IN CONNECTION WITH THE USE OF OR INABILITY TO
        USE THE WEBSITE, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF
        PROFITS, LOSS OF GOODWILL, LOSS OF DATA, WORK STOPPAGE, ACCURACY OF
        RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, EVEN IF AN AUTHORIZED
        REPRESENTATIVE OF YSL HAS BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE
        POSSIBILITY OF SUCH DAMAGES. SUBJECT TO THE FOREGOING, IN NO EVENT WILL
        YSL BE LIABLE FOR ANY DAMAGES IN EXCESS OF THE AMOUNT PAID BY YOU
        TOWARDS THE PRICE OF THE PRODUCT IN RESPECT TO WHICH THE CLAIM AROSE.
        YOU HEREBY RELEASE US FROM ANY AND ALL OBLIGATIONS, LIABILITES AND
        CLAIMS IN EXCESS OF THIS LIMITATION. MISCELLANEOUS We reserve the right
        to modify these Terms and Conditions at any time without notice to you.
        Any modifications of these Terms and Conditions will be effective once
        published on our Website. Your continued use of the Website (or any of
        our other websites) following such change shall signify your agreement
        to be bound by the modified Terms and Conditions. Please read the Terms
        and Conditions and check back often. If you do not agree to any change
        to the Terms and Conditions, then you must immediately stop using the
        Website. These Terms and Conditions constitute the whole legal agreement
        between you and YSL and govern your use of the Website and all Services
        and products available thereon and completely replace any prior
        agreements between you and YSL in relation to the same. You acknowledge
        and agree that the form and nature of the Services may change from time
        to time without prior notice to you and YSL may stop providing the same
        (or any features within them) to you or to users. You understand that
        YSL grants the operators of public search engines permission to use
        spiders to copy materials from the site for the sole purpose of creating
        publicly available searchable indices of the materials and YSL reserves
        the right to revoke these exceptions either generally or in specific
        cases. You understand that you are solely responsible for (and that YSL
        has no responsibility to you or to any third party for) any breach of
        your obligations under the Terms and Conditions and for the consequences
        (including any loss or damage which YSL may suffer) of any such breach.
        If YSL does not exercise or enforce, or delays in its exercise or
        enforcement, of any legal right or remedy, this will not be taken to be
        a formal waiver of YSL’s rights. You and YSL are independent
        contractors, and these Terms and Conditions, including but not limited
        to submission or distribution of Your Content, will not, in whole or in
        part, establish any relationship of partnership, joint venture,
        employment, franchise or agency between the you and YSL. Neither party
        will have the power to bind the other or incur obligations on the
        other's behalf without the other's prior written consent. Neither party
        is authorized to act as an agent or representative of the other or for
        or on behalf of the other party in any capacity other than as expressly
        set out in the Terms and Conditions. Neither party shall advertise,
        represent or hold itself (or any of its agents) out as so acting or
        being authorized so to act, or incur any liability or obligation on
        behalf of, or in the name of, the other party, unless specifically
        provided for in these Terms and Conditions. If any of the provision of
        these Terms and Conditions is held to be illegal or unenforceable, the
        other terms of these Terms and Conditions shall not be affected and
        shall remain in full force and effect. These Terms and Conditions are
        reproduced in English and Arabic. If there is any inconsistency between
        the English text and the Arabic text, the English text will prevail.
        These Terms and Conditions are governed by the laws of the Emirate of
        Dubai, United Arab Emirates and all disputes arising hereunder are
        subject to the exclusive jurisdiction of the Dubai courts. CONTACT US -
        CUSTOMER CARE If you have any questions about the Terms and Conditions
        or any aspect of your order, please contact our Customer Care by email
        at contact-yslbeautyae@ccare.lorealmiddleeast.com or by telephone at
        0097148167199 every day from 10AM to 10PM (UAE TIME).
      </p>
    </div>
  );
}
