import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            onClick={hide}
          >
            <div onClick={(e) => e.stopPropagation()} className="policy-modal">
              <div className="modal-header">
                <span className="modal__main-title">
                  ANTI-SLAVERY POLICY STATEMENT
                </span>
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div>
                <span className="modal__title">Overview</span>
                <p className="modal__text">
                  Modern slavery is a crime and a violation of fundamental human
                  rights. It takes various forms, such as slavery, servitude,
                  forced and compulsory labour and human trafficking, all of
                  which have in common the deprivation of a person's liberty by
                  another in order to exploit them for personal or commercial
                  gain. The Company has a zero-tolerance approach to modern
                  slavery, and we are committed to acting ethically and with
                  integrity in all our business dealings and relationships and
                  to implementing and enforcing effective systems and controls
                  to ensure modern slavery is not taking place anywhere in our
                  own business or in any of our supply chains. We are also
                  committed to ensuring there is transparency in our own
                  business and in our approach to tackling modern slavery
                  throughout our supply chains, consistent with our disclosure
                  obligations under the Modern Slavery Act 2015. We expect the
                  same high standards from all of our contractors, suppliers and
                  other business partners, and as part of our contracting
                  processes, in the coming year we will include specific
                  prohibitions against the use of forced, compulsory or
                  trafficked labour, or anyone held in slavery or servitude,
                  whether adults or children, and we expect that our suppliers
                  will hold their own suppliers to the same high standards. This
                  policy applies to all persons working for us or on our behalf
                  in any capacity, including employees at all levels, directors,
                  officers, agency workers, seconded workers, volunteers,
                  interns, agents, contractors, external consultants,
                  third-party representatives and business partners. This policy
                  does not form part of any employee's contract of employment
                  and we may amend it at any time.
                </p>
                <span className="modal__title">
                  Responsibility for the policy
                </span>
                <p className="modal__text">
                  The Company has overall responsibility for ensuring this
                  policy complies with our legal and ethical obligations, and
                  that all those under our control comply with it. The Company
                  has primary and day-to-day responsibility for implementing
                  this policy, monitoring its use and effectiveness, dealing
                  with any queries about it, and auditing internal control
                  systems and procedures to ensure they are effective in
                  countering modern slavery. Management at all levels are
                  responsible for ensuring those reporting to them understand
                  and comply with this policy and are given adequate and regular
                  training on it and the issue of modern slavery in supply
                  chains. You are invited to comment on this policy and suggest
                  ways in which it might be improved. Comments, suggestions and
                  queries are encouraged and should be addressed to the Managing
                  Director.
                </p>
                <span className="modal__title">Compliance with the policy</span>
                <p className="modal__text">
                  You must ensure that you read, understand and comply with this
                  policy. The prevention, detection and reporting of modern
                  slavery in any part of our business or supply chains is the
                  responsibility of all those working for us or under our
                  control. You are required to avoid any activity that might
                  lead to, or suggest, a breach of this policy. You must notify
                  your line manager OR a company Director as soon as possible if
                  you believe or suspect that a conflict with this policy has
                  occurred or may occur in the future. You are encouraged to
                  raise concerns about any issue or suspicion of modern slavery
                  in any parts of our business or supply chains of any supplier
                  tier at the earliest possible stage. If you believe or suspect
                  a breach of this policy has occurred or that it may occur, you
                  must notify your line manager or company Director OR report it
                  in accordance with our Whistleblowing Policy as soon as
                  possible. You should note that where appropriate, and with the
                  welfare and safety of local workers as a priority, we will
                  give support and guidance to our suppliers to help them
                  address coercive, abusive and exploitative work practices in
                  their own business and supply chains. If you are unsure about
                  whether a particular act, the treatment of workers more
                  generally, or their working conditions within any tier of our
                  supply chains constitutes any of the various forms of modern
                  slavery, raise it with your line manager or company Director.
                  We aim to encourage openness and will support anyone who
                  raises genuine concerns in good faith under this policy, even
                  if they turn out to be mistaken. We are committed to ensuring
                  no one suffers any detrimental treatment as a result of
                  reporting in good faith their suspicion that modern slavery of
                  whatever form is or may be taking place in any part of our own
                  business or in any of our supply chains. Detrimental treatment
                  includes dismissal, disciplinary action, threats or other
                  unfavourable treatment connected with raising a concern. If
                  you believe that you have suffered any such treatment, you
                  should inform your line manager immediately. If the matter is
                  not remedied, and you are an employee, you should raise it
                  formally using our Grievance Procedure, which can be found in
                  the current employee handbook.
                </p>
                <span className="modal__title">
                  Communication & awareness of this policy
                </span>
                <p className="modal__text">
                  Training on this policy, and on the risk our business faces
                  from modern slavery in its supply chains, forms part of the
                  induction process for all individuals who work for us, and
                  updates will be provided using established methods of
                  communication between the business and you. Our zero-tolerance
                  approach to modern slavery must be communicated to all
                  suppliers, contractors and business partners at the outset of
                  our business relationship with them and reinforced as
                  appropriate thereafter.
                </p>
                <span className="modal__title">Breaches of this policy</span>
                <p className="modal__text">
                  Any employee who breaches this policy will face disciplinary
                  action, which could result in dismissal for misconduct or
                  gross misconduct. We may terminate our relationship with other
                  individuals and organisations working on our behalf if they
                  breach this policy. Printed and Signed Off By: Jack Jefferies,
                  Lewis Jefferies, Ben Jefferies, Max Webster-khan. 2022
                </p>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null;

export default Modal;