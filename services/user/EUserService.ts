export enum EAccountStatus {
  /**
   * This is the EAccountStatus Enum.
   *
   * @remarks
   * This Enum takes care over all the possible statusses a User can have.
   *
   * @param registered - User is registered
   * @param verified - Email address is verified
   * @param subscribed - User successfully subscribed via Stripe
   * @param reset_password - Requested a password reset
   * @param reset_email - Requested a email reset
   *
   */
  registered = "registered",
  verified = "verified",
  subscribed = "subscribed",
  reset_password = "reset_password",
  reset_email = "reset_email",
}
