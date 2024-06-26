import React from "react";
import bg from "./asset/page2/bg.png";
import logo from "./asset/page3plus/logo.png";
import term from "./asset/page3plus/pri.png";
import cross from './asset/page3plus/cross.png'
import { useNavigate } from "react-router-dom";

export default function Screen3plus() {
    const navigate = useNavigate();

    const handleCross=()=>{
      console.log("pressed");
        navigate('/forth');
    }
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
        width:"4%",
        position:'absolute',
        top:"10%",
        marginLeft:'40%'


    
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
          height: "15em", // Set the height to 7 lines (assuming 1 line = 1em)
          overflowY: "scroll", // Enable vertical scrollbar
          color: "white",
          padding: "10px",
          zIndex: 1,
          marginTop: "20%",
          //   height: "40%",
          width: "70%",
          textTransform: 'uppercase', fontWeight: 'bold'

          //   zIndex: 1,
          // Add some padding for better readability
        }}
      >
        PRIVACY AND SECURITY We, Saj Emirates Trading L.L.C, a limited liability
        company duly organized under the laws of the United Arab Emirates, under
        the Commercial License number 539400, whose registered address is at PO
        Box 8413, Dubai, United Arab Emirates and whose paid share capital is
        300,000 United Emirates Arabic Dirhams (“we”, “us”, “ours”) respect the
        privacy of all of our users and are committed to protecting information
        collected through the www.yslbeauty.ae (“Website”). Personal information
        about you may be collected in several ways when you use the Website or
        any services including newsletters, press releases or any other social
        media functions of the Website (this includes Facebook, Instagram,
        Pinterest, Twitter and Tumblr) (the “Services”) We provide this
        statement and our Cookies Policy ("Privacy Policy") to help you to
        understand what we may do with any personal information that we obtain
        from you. This Privacy Policy does not govern our collection or use of
        data about you through channels other than the Website. Please exit the
        Website immediately if you are accessing the Website in a country or
        other territory where use of the Website is not permitted. 1 - What
        categories of Personal Information do we collect? The Website collects
        certain information when you interact with it, for example, the Website
        may collect "Personal Information", which is any information that can be
        used to identify, directly or indirectly, an individual. The Website may
        also collect data that does not identify you specifically. The following
        is a list of Personal Information that we may collect and process about
        you: · Information that you provide by filling out forms on the Website,
        including when you register, subscribe to any Services including but not
        limited to interactive services (such as blogs, chat rooms, message
        boards, or other user forums); enter a competition or promotion,
        complete a survey or report a problem with the Website: identification
        data, contact information, postal address, email address; · Your correct
        date of birth, which we may require that you submit accurately to ensure
        that you do not access the Website if you are not of a legal age to
        purchase products offered for sale on the Website; · Any information you
        may provide when you contact us or send us a correspondence; ·
        Information necessary to process an order which is placed with us: your
        name, email address, phone numbers, home address, shipping and
        credit/debit card billing address(es); · Details of any transactions you
        carry out through the Website, including the placement of any orders by
        you: payment information (for example credit card details, or other
        payment details which you must provide to receive products you have
        ordered from us), connection data and your taste and preferences; and ·
        Details of your visits to the Website including, but not limited to,
        your computer's IP address, password information, page interaction
        information, traffic data, location data, weblogs, and other data about
        the resources that you access. You can access and review your Personal
        Information in the My Account section of the Website. If your Personal
        Information changes in any way or is incorrectly presented on the
        Website you should immediately update or correct your Personal
        Information (as applicable) by accessing the My Account section on the
        Website or, alternatively, by contacting our Customer Care as detailed
        in Section 7 below. 2 - For which purposes do we use your Personal
        Information? We collect the above-mentioned Personal Information for the
        following purposes: (i) For the performance of a contract to which the
        data subject is party: · to allow us to process your orders and payment,
        let you know the status of your order, · to manage your account and to
        serve your requests in general, (ii) On the basis of the data subject's
        consent: · to send you our newsletters as well as details of our
        products, special offers or promotional offers that may be of interest
        to you, (iii) For the purposes of the legitimate interests pursued by
        us: · to improve our understanding of your interests and concerns, to
        improve our understanding of your use of our products, for our internal
        marketing and demographic studies: we may use your information to make
        our Website design and products/services better, as we believe that it
        is also in our legitimate interest to better serve you and respond to
        your needs. for security purposes: we may use information to protect our
        company, our clients, and our Website against fraud, theft or any
        wrongdoing which may affect our activity as it is our legitimate
        interest to ensure the security of our activity. 3 - Who do we share
        your Personal Information with? Personal Information that you provide
        may be disclosed to a fraud prevention agency, which may keep a record
        of that information as permitted by applicable law. Personal Information
        may also be shared with other trading divisions within our group of
        companies, on a need-to-know basis, for the above-mentioned purposes.
        Personal Information will be shared with L’Oréal Middle East FZE,
        L’Oréal Group and L’Oréal trusted third parties for marketing purposes.
        Please be aware that if we are requested by any regulatory or government
        authority investigating any suspected activity to provide your Personal
        Information, we will be entitled to do so as permitted by applicable
        law. We may also disclose your Personal Information onto our carefully
        selected business partners or to our affiliated companies to enable them
        to send you information which may be of interest to you, subject to your
        consent. If you do not want to receive such information anymore, you can
        just click on the “UNSUBSCRIBE” link in our emails, or simply contact
        our Customer Care as detailed in Section 7 below and they will assist
        you in this respect. From time to time we may disclose Personal
        Information on a need-to-know basis: · To our service providers and
        subcontractors, including our affiliates, retained to perform functions
        on our behalf or to provide services to us, such as warehousing and
        delivery; marketing and advertising; data processing; software
        development; website hosting and management; information technology and
        office services; legal, accounting, audit and other third party service
        providers; and further provided such service provider does not collect,
        use or disclose the personal information for any purpose other than to
        perform such functions or to provide services to us or as otherwise
        required by law; · To any prospective seller or buyer of our business or
        assets; If we are under a duty to disclose or share your personal data
        in order to enforce or apply the Terms and Conditions of our Website and
        other agreements, to permit us to pursue available remedies or limit the
        damages that we may sustain, or protect our rights, property, safety or
        security and that of our employees, agents, contractors, customers, the
        visitors of the Website or others. This includes exchanging information
        with other companies and organizations for the purposes of fraud
        protection and credit risk reduction. 4 - Who do we transfer your
        Personal Information? In certain cases, and for data hosting purposes
        Personal Information we collected about you may be transferred to
        affiliates, service providers, business partners located outside the EU
        to which Personal Information are disclosed in the GCC countries,
        including to entities that are located outside of the European Economic
        Area, which may not have an adequate level of protection. We have
        implemented appropriate safeguards with such data recipients by entering
        into data transfer agreements based on the European Commission standards
        clauses with such data recipients. You can ask for a copy of such
        appropriate safeguards by contacting us as set out in Section 7 below 5
        - Use of Cookies We use cookies and track IP addresses so we can improve
        our Services and enhance your experience as detailed below. Cookies are
        data files a website can send to your computer's browser for
        record-keeping purposes. We use cookies to help us to gather and store
        information about visitors to our Website which helps us and to make our
        Website more user friendly, and to give you a better experience when you
        return to the Website. We may use information from cookies for the
        following purposes: · Traffic monitoring, for example, the IP address
        from which you access the Website, the type of browser and operating
        system used to access the Website, the date and time of your access to
        the Website, the pages you visit, and the Internet address of the
        website from which you accessed our Website; · To recognize repeat
        visitors for statistical/analytical purposes; · Anonymous tracking of
        interaction with online advertising, for example, to monitor the number
        of times that a banner ad is displayed and the number of times it is
        clicked. · To customize or personalize your experience of the Website,
        for example, so that we can greet you by name; · For transactional
        purposes, such as credit/debit card sales; · To monitor your use of the
        Website in order to make our communications with you as relevant as
        possible, for example, by sending you email communications relevant to
        the parts of the Website that you visit most often or by letting you
        know about features of the Website that you have not accessed
        previously. We may compile and report to third parties (such as
        advertisers) anonymous statistics about our users in terms of numbers,
        traffic patterns and related site information. Whereas some cookies may
        be functional to collect information which will allow us to facilitate
        your browsing such as languages preferences, memorizing log-in, or
        saving the content of your shopping basket, other cookies also collect
        information on your behaviour by saving your preferences as detailed
        above. While functional cookies may be installed to facilitate your
        visit of our Website, you may express your choice regarding our cookies
        through the privacy settings options of your browser which should
        include features to prevent from storing information on the terminal or
        processing information already stored on such terminal, unless you turn
        on the feature to allow such storage or processing. Each browser has its
        own cookie management system, you can find information specific to your
        browser under the “help” menu, where you will be provided with all
        necessary information about how to set your preferences. We cannot
        guarantee the proper functioning of the Website if you choose to disable
        your cookies. However, your visit to our Website will be significantly
        enhanced if cookies are not disabled. 6 - How long do We keep your
        Personal Information for? Personal Information collected for the
        purposes hereunder will be stored only as long as necessary for the
        purpose of your commercial relationship with us, or as required to
        comply with our legal obligations. If a judicial action is initiated,
        Personal Information may be stored until the end of such action,
        including any potential periods for appeal, and will then be deleted or
        archived as permitted by applicable law. Your Personal Information will
        not be kept in a form that allows you to be identified for any longer
        than is reasonably considered necessary by us for achieving the purposes
        for which it was collected or processed or as it is established in the
        applicable laws related to data retention periods. 7 - Your rights
        Subject to applicable law, you may have the following rights: (i) Right
        of access You have the right to confirm with us whether your Personal
        Information is processed, and if it is, to request access to that
        Personal Information including the categories of Personal Information
        processed, the purpose of the processing and the recipients or
        categories of recipients. (ii) Right to rectification You may have the
        right to rectify inaccurate or incomplete your Personal Information.
        (iii) Right to erasure You may have the right to ask us to erase your
        Personal Information. (iv) Right to restriction of processing In limited
        circumstances, you may have the right to request that we restrict
        processing of your Personal Information. (v) Right to data portability
        You may have the right to receive your Personal Information, which you
        have provided to us, in a structured, commonly used and machine-readable
        format and you may have the right to transmit that data to another
        entity. (vi) Right to object and rights relating to automated
        decision-making Under certain circumstances you may have the right to
        object, on grounds relating to your particular situation, at any time to
        the processing of your Personal Information by us and We can be required
        to no longer process your Personal Data. (vii) Right to provide your
        instructions regarding the storage, deletion or disclosure of your
        Personal Information after your death. When your Personal Information
        processing is based on your consent, you may withdraw any consent you
        previously provided to us at any moment. The withdrawal of consent shall
        not affect the lawfulness of processing based on consent before its
        withdrawal. To exercise these rights, please contact Customer Care at
        contact@ccare.yslbeauty.ae or 0097148167199. You also have the right to
        lodge a complaint with the competent data protection supervisory
        authority. 8 - Changes to this Policy We reserve the right to modify
        this Privacy Policy at any time. Our Privacy Policy may change from time
        to time to reflect changes in our processing of your Personal
        Information. Any modifications of this Privacy Policy will be effective
        once published on our Website. We will notify you of any material
        changes as required by law. Please read the Privacy Policy and check
        back often. This Privacy Policy is incorporated into, and part of, the
        Terms and Conditions, which govern your use of the Website. This Privacy
        Policy is reproduced in English and Arabic. If there is any
        inconsistency between the English text and the Arabic text, the English
        text will prevail.
      </p>
    </div>
  );
}
